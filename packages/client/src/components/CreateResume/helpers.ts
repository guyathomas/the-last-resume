export const createResumeData = (slug: string) =>({
  id: "b7d91036-4df9-5d06-82a5-0d46589ea95d",
  version: 1,
  tagline: "A good place for a catchy tagline",
  intro:
    "A sentence or two about you. What you love about your work. This is to get the recruiter excited",
  contactDetails: [
    ["Email", "youremail@domain.com"],
    ["Location", "San Francisco"],
    ["Web", `thelastresume.com/resume/${slug}`],
  ],
  experience: [
    {
      date: "Date Range",
      company: "Company Name",
      title: "Job Title",
      details: "What did you do here?",
    },
  ],
  education: [
    {
      company: "School Name",
      title: "Degree Name",
      details: "Describe major accomplishments in the degree",
    },
  ],
  avatar:
    "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png",
  firstName: "First Name",
  lastName: "Last Name",
});
