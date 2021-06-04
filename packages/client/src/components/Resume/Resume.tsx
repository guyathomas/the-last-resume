import React from "react";
import Timeline from "./Timeline";
import {
  PageContainer,
  ProfileContainer,
  ProfileSection,
  TimelineSectionTitle,
  IntroTitle,
  Titles,
  Contacts,
  ContactWrapper,
  ContactTitle,
  FirstName,
  LastName,
  BioWrapper,
  IntroContent,
  TimelineSectionDetails,
  SectionContentInner,
  Bio,
  Description,
  DescriptionRow,
  Names,
  AvatarImage,
  ContactDetail,
} from "./styles";
import set from "lodash/set";
import { TextField } from "@material-ui/core";

interface SectionDetail {
  date: string;
  company: string;
  title: string;
  details: string;
}

const SampleTimeline: SectionDetail = {
  title: "Title",
  company: "Company",
  date: "Date",
  details:
    "List of details<ul><li>First</li><li>Second</li><li>Third</li></ul>",
};

interface ResumeJSON_v2_Section {
  label: String;
  values: SectionDetail[];
}

export interface ResumeJSON_v2 {
  id: string;
  version: "2";
  tagline: string;
  intro: string;
  contactDetails: [title: string, description: string][];
  sections: ResumeJSON_v2_Section[];
  avatar: string;
  firstName: string;
  lastName: string;
}

interface ResumeProps {
  currentValues: ResumeJSON_v2;
  isEditing?: boolean;
  setResume: React.Dispatch<React.SetStateAction<ResumeJSON_v2>>;
}

const Resume: React.FC<ResumeProps> = ({
  isEditing,
  setResume,
  currentValues,
}) => {
  // We don't want the contentEditable fields to render using actual form state
  // Since we're taking control of the dom, it led to unexpected behavior
  const [initialValues] = React.useState(currentValues);
  const setFieldValue = (field: string, value: string) => {
    set(currentValues, field, value);
  };
  const createOnInput =
    (name: string) => (event: React.FormEvent<HTMLElement>) => {
      setFieldValue(String(name), event.currentTarget.innerText);
    };
  return (
    <PageContainer>
      <ProfileSection>
        <ProfileContainer>
          {isEditing && (
            <TextField
              value={currentValues.avatar}
              sx={{ width: "100%" }}
              variant="outlined"
              id="avatar"
              onChange={(event) => {
                setResume({
                  ...currentValues,
                  avatar: event.target.value,
                });
              }}
            />
          )}
          <AvatarImage src={currentValues.avatar} alt="profile-picture" />
        </ProfileContainer>
      </ProfileSection>
      <BioWrapper>
        <Bio>
          <Titles>
            <Names>
              <FirstName
                contentEditable={isEditing}
                onInput={createOnInput("firstName")}
              >
                {initialValues.firstName}
              </FirstName>
              <LastName
                contentEditable={isEditing}
                onInput={createOnInput("lastName")}
              >
                {initialValues.lastName}
              </LastName>
            </Names>
            <DescriptionRow>
              <Description
                contentEditable={isEditing}
                onInput={createOnInput("tagline")}
              >
                {initialValues.tagline}
              </Description>
            </DescriptionRow>
          </Titles>
          <Contacts>
            {currentValues.contactDetails?.map((_, index) => {
              const [title, detail] = initialValues.contactDetails[index] || [];
              if (!detail) return null;
              return (
                <ContactWrapper key={title}>
                  <ContactTitle>{title}</ContactTitle>
                  <ContactDetail
                    contentEditable={isEditing}
                    onInput={(event) => {
                      setFieldValue(
                        `contactDetails[${index}][1]`,
                        event.currentTarget.innerText
                      );
                    }}
                  >
                    {detail}
                  </ContactDetail>
                </ContactWrapper>
              );
            })}
          </Contacts>
        </Bio>
      </BioWrapper>
      <IntroTitle>Intro</IntroTitle>
      <IntroContent>
        <SectionContentInner
          contentEditable={isEditing}
          onInput={createOnInput("intro")}
        >
          {initialValues.intro}
        </SectionContentInner>
      </IntroContent>
      {currentValues.sections.map(({ label, values }, sectionIndex) => (
        <>
          <TimelineSectionTitle>{label}</TimelineSectionTitle>
          <TimelineSectionDetails>
            <SectionContentInner>
              {values.map((_, sectionValueIndex) => {
                const sectionValueName = `sections[${sectionIndex}].values[${sectionValueIndex}]`;
                const { company, date, details, title } =
                  currentValues.sections[sectionIndex].values[
                    sectionValueIndex
                  ];
                return (
                  <Timeline
                    allowRemove={
                      currentValues.sections[sectionIndex].values.length > 1
                    }
                    allowAdd={sectionValueIndex === 0}
                    onRemove={() => {
                      const newState = {
                        ...currentValues,
                        sections: currentValues.sections.map((s, i) => {
                          if (i === sectionIndex) {
                            const newValues = [...s.values];
                            newValues.splice(sectionIndex, 1);
                            return {
                              label: s.label,
                              values: newValues,
                            };
                          } else {
                            return s;
                          }
                        }),
                      };
                      setResume(newState);
                    }}
                    onAdd={() => {
                      const newState = {
                        ...currentValues,
                        sections: currentValues.sections.map((s, i) => {
                          if (i === sectionIndex) {
                            const newValues = [...s.values];
                            newValues.unshift(SampleTimeline);
                            return {
                              label: s.label,
                              values: newValues,
                            };
                          } else {
                            return s;
                          }
                        }),
                      };
                      setResume(newState);
                    }}
                    onChange={(fieldValue, value) => {
                      const fieldName = `${sectionValueName}.${String(
                        fieldValue
                      )}`;
                      setFieldValue(fieldName, value);
                    }}
                    contentEditable={isEditing}
                    company={company || ""}
                    title={title || ""}
                    date={date || ""}
                    details={details || ""}
                    key={sectionValueName}
                  />
                );
              })}
            </SectionContentInner>
          </TimelineSectionDetails>
        </>
      ))}
    </PageContainer>
  );
};

export default Resume;
