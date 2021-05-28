import React from "react";
import styled from "@emotion/styled";
import Timeline from "./Timeline";
import {
  DownloadIcon,
  EditIcon,
  GithubIcon,
  InteractiveSvgStyles,
  SaveSvgIcon,
  CloseSvgIcon,
} from "./svgs";
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
  Background,
  AvatarImage,
} from "./styles";
import { DarkModeToggle } from "components/DarkModeToggle";
import { ThemeContext } from "context/ThemeProvider";
import { Formik, Form, FieldArray, Field } from "formik";
import { Banner, BannerButton } from "components/Banner";

const DarkModeToggleAction = styled(DarkModeToggle)`
  ${InteractiveSvgStyles}
`;

const DEFAULT_AVATAR_URL =
  "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png";

const SampleTimeline = {
  title: "Title",
  company: "Company",
  date: "Date",
  details:
    "List of details<ul><li>First</li><li>Second</li><li>Third</li></ul>",
};

const AddSection = styled(SectionButton)`
  top: 30px;
  right: 30px;
`;
const noop = () => {
  return;
};

type ResumeJSON = any;

const Resume: React.FC<{
  resumeData: ResumeJSON;
  onSave: (newResume: ResumeJSON) => void;
  onReset: () => void;
  onEdit?: (isEditing: boolean) => void;
}> = ({ resumeData, onSave, onReset, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const { isDarkMode } = React.useContext(ThemeContext);
  React.useEffect(() => {
    if (onEdit) onEdit(isEditing);
  }, [isEditing, onEdit]);
  return (
    <Background>
      <Formik initialValues={resumeData} onSubmit={noop}>
        {({ values, setFieldValue }) => {
          const createOnInput =
            (name: keyof ResumeJSON) =>
            (event: React.FormEvent<HTMLElement>) => {
              setFieldValue(String(name), event.currentTarget.innerText);
            };
          return (
            <>
              {isEditing && (
                <Banner>
                  You are editing this resume. Changes are only on this device.
                  <BannerButton
                    onClick={() => {
                      setIsEditing(!isEditing);
                      if (onSave) onSave(values);
                    }}
                  >
                    Save Changes
                  </BannerButton>
                  <BannerButton
                    onClick={() => {
                      setIsEditing(!isEditing);
                    }}
                  >
                    Stop Editing
                  </BannerButton>
                </Banner>
              )}
              <Form>
                <PageContainer>
                  <ProfileSection>
                    <ProfileContainer>
                      {isEditing && (
                        <Field
                          style={{ width: "100%" }}
                          id="avatar"
                          name="avatar"
                        />
                      )}
                      <AvatarImage
                        src={resumeData.avatar || DEFAULT_AVATAR_URL}
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
                            {resumeData.firstName}
                          </FirstName>
                          <LastName
                            contentEditable={isEditing}
                            onInput={createOnInput("lastName")}
                          >
                            {resumeData.lastName}
                          </LastName>
                        </Names>
                        <DescriptionRow>
                          <Description
                            contentEditable={isEditing}
                            onInput={createOnInput("tagline")}
                          >
                            {resumeData.tagline}
                          </Description>
                        </DescriptionRow>
                      </Titles>
                      <Contacts>
                        {resumeData.contactDetails?.map(
                          (contactDetail: any, index: any) => {
                            // Wow, TS really wants me to be safe here
                            const definitelyContactDetail = contactDetail || [];
                            const stringTitle = String(
                              definitelyContactDetail[0]
                            );
                            const stringDetail = String(
                              definitelyContactDetail[1]
                            );
                            if (!stringDetail) return null;
                            return (
                              <ContactWrapper key={stringTitle}>
                                <ContactTitle>{stringTitle}</ContactTitle>
                                <span
                                  contentEditable={isEditing}
                                  onInput={(event) => {
                                    setFieldValue(
                                      `contactDetails[${index}][1]`,
                                      event.currentTarget.innerText
                                    );
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html: stringDetail,
                                  }}
                                />
                              </ContactWrapper>
                            );
                          }
                        )}
                      </Contacts>
                    </Bio>
                  </BioWrapper>
                  <IntroTitle>Intro</IntroTitle>
                  <IntroContent>
                    <SectionContentInner
                      contentEditable={isEditing}
                      onInput={createOnInput("intro")}
                    >
                      {resumeData.intro}
                    </SectionContentInner>
                  </IntroContent>
                  <ExperienceTitle>Experience</ExperienceTitle>
                  <ExperienceSection>
                    <SectionContentInner>
                      <FieldArray name="experience">
                        {({ remove, push }) => (
                          <>
                            {isEditing && (
                              <AddSection
                                onClick={() => {
                                  push(SampleTimeline);
                                }}
                              >
                                +
                              </AddSection>
                            )}
                            {values.experience?.map((item: any, index: any) => {
                              const name = `experience[${index}]`;
                              return (
                                <Timeline
                                  onRemove={() => {
                                    remove(index);
                                  }}
                                  onChange={(fieldValue, value) => {
                                    setFieldValue(
                                      `${name}.${String(fieldValue)}`,
                                      value
                                    );
                                  }}
                                  contentEditable={isEditing}
                                  company={item?.company || ""}
                                  title={item?.title || ""}
                                  date={item?.date || ""}
                                  details={item?.details || ""}
                                  key={index}
                                />
                              );
                            })}
                          </>
                        )}
                      </FieldArray>
                    </SectionContentInner>
                  </ExperienceSection>
                  <EducationTitle>Projects</EducationTitle>
                  <EducationSection>
                    <SectionContentInner>
                      <FieldArray name="education">
                        {({ remove, push }) => (
                          <>
                            {isEditing && (
                              <AddSection
                                onClick={() => {
                                  push(SampleTimeline);
                                }}
                              >
                                +
                              </AddSection>
                            )}
                            {values.education?.map((item: any, index: any) => {
                              const name = `education[${index}]`;
                              return (
                                <Timeline
                                  onRemove={() => {
                                    remove(index);
                                  }}
                                  onChange={(fieldValue, value) => {
                                    setFieldValue(
                                      `${name}.${String(fieldValue)}`,
                                      value
                                    );
                                  }}
                                  contentEditable={isEditing}
                                  key={index}
                                  company={item?.company || ""}
                                  title={item?.title || ""}
                                  date={item?.date || ""}
                                  details={item?.details || ""}
                                />
                              );
                            })}
                          </>
                        )}
                      </FieldArray>
                    </SectionContentInner>
                  </EducationSection>
                </PageContainer>
              </Form>
            </>
          );
        }}
      </Formik>
    </Background>
  );
};

export default Resume;
