import React from "react";
import styled from "@emotion/styled";
import Timeline from "./Timeline";
import {
  PageContainer,
  ProfileContainer,
  ProfileSection,
  EducationTitle,
  ExperienceTitle,
  IntroTitle,
  Titles,
  Contacts,
  ContactWrapper,
  ContactTitle,
  FirstName,
  LastName,
  EducationSection,
  BioWrapper,
  IntroContent,
  ExperienceSection,
  SectionContentInner,
  Bio,
  Description,
  DescriptionRow,
  Names,
  SectionButton,
  AvatarImage,
  ContactDetail,
} from "./styles";

import { FieldArray, Field, FormikHelpers } from "formik";
import AddIcon from "@material-ui/icons/Add";
const DEFAULT_AVATAR_URL =
  "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png";

const SampleTimeline = {
  title: "Title",
  company: "Company",
  date: "Date",
  details:
    "List of details<ul><li>First</li><li>Second</li><li>Third</li></ul>",
};

const noop = () => {};

type ResumeJSON = any;

const Resume: React.FC<{
  values: ResumeJSON;
  currentValues: ResumeJSON;
  isEditing?: boolean;
  setFieldValue?: FormikHelpers<ResumeJSON>["setFieldValue"];
}> = ({ values, isEditing, setFieldValue = noop, currentValues }) => {
  const createOnInput =
    (name: keyof ResumeJSON) => (event: React.FormEvent<HTMLElement>) => {
      setFieldValue(String(name), event.currentTarget.innerText);
    };

  return (
    <PageContainer>
      <ProfileSection>
        <ProfileContainer>
          {isEditing && (
            <Field style={{ width: "100%" }} id="avatar" name="avatar" />
          )}
          <AvatarImage
            src={values.avatar || DEFAULT_AVATAR_URL}
            alt="profile-picture"
          />
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
                {values.firstName}
              </FirstName>
              <LastName
                contentEditable={isEditing}
                onInput={createOnInput("lastName")}
              >
                {values.lastName}
              </LastName>
            </Names>
            <DescriptionRow>
              <Description
                contentEditable={isEditing}
                onInput={createOnInput("tagline")}
              >
                {values.tagline}
              </Description>
            </DescriptionRow>
          </Titles>
          <Contacts>
            {values.contactDetails?.map((contactDetail: any, index: any) => {
              // Wow, TS really wants me to be safe here
              const definitelyContactDetail = contactDetail || [];
              const stringTitle = String(definitelyContactDetail[0]);
              const stringDetail = String(definitelyContactDetail[1]);
              if (!stringDetail) return null;
              return (
                <ContactWrapper key={stringTitle}>
                  <ContactTitle>{stringTitle}</ContactTitle>
                  <ContactDetail
                    contentEditable={isEditing}
                    onInput={(event) => {
                      setFieldValue(
                        `contactDetails[${index}][1]`,
                        event.currentTarget.innerText
                      );
                    }}
                  >
                    {stringDetail}
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
          {values.intro}
        </SectionContentInner>
      </IntroContent>
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceSection>
        <SectionContentInner>
          <FieldArray name="experience">
            {({ remove, unshift }) =>
              currentValues.experience?.map((item: any, index: any) => {
                const name = `experience[${index}]`;
                return (
                  <Timeline
                    allowRemove={currentValues.experience.length > 1}
                    allowAdd={index === 0}
                    onRemove={() => {
                      remove(index);
                    }}
                    onAdd={() => {
                      unshift(SampleTimeline);
                    }}
                    onChange={(fieldValue, value) => {
                      setFieldValue(`${name}.${String(fieldValue)}`, value);
                    }}
                    contentEditable={isEditing}
                    company={item?.company || ""}
                    title={item?.title || ""}
                    date={item?.date || ""}
                    details={item?.details || ""}
                    key={index}
                  />
                );
              })
            }
          </FieldArray>
        </SectionContentInner>
      </ExperienceSection>
      <EducationTitle>Education</EducationTitle>
      <EducationSection>
        <SectionContentInner>
          <FieldArray name="education">
            {({ remove, unshift }) =>
              currentValues.education?.map((item: any, index: any) => {
                const name = `education[${index}]`;
                return (
                  <Timeline
                    onRemove={() => {
                      remove(index);
                    }}
                    allowRemove={currentValues.education.length > 1}
                    allowAdd={index === 0}
                    onChange={(fieldValue, value) => {
                      setFieldValue(`${name}.${String(fieldValue)}`, value);
                    }}
                    onAdd={() => {
                      unshift(SampleTimeline);
                    }}
                    contentEditable={isEditing}
                    key={index}
                    company={item?.company || ""}
                    title={item?.title || ""}
                    date={item?.date || ""}
                    details={item?.details || ""}
                  />
                );
              })
            }
          </FieldArray>
        </SectionContentInner>
      </EducationSection>
    </PageContainer>
  );
};

export default Resume;
