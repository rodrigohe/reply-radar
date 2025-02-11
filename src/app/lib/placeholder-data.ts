const applications = [
  {
    uuid: 'd83179b5-7385-41ff-8601-f9fd993af653',
    stage: 'To Apply',
    company: '1Password',
    position: 'Full Stack Developer',
    link: 'https://jobs.lever.co/1password/511c2039-5291-4dd8-b4f7-bd5dc4f01795',
    ref_id: '',
    apply_date: '2024-12-09',
    location: 'Remote',
  },
  {
    uuid: '0c8fd6f2-5132-4244-9342-1307a4c013f1',
    stage: 'Applied',
    company: 'Affinity',
    position: '',
    link: 'https://www.affinity-group.ca/jobs?page=1',
    ref_id: '',
    apply_date: '2024-12-09',
    location: '',
  },
  {
    uuid: '76072923-e641-4115-9008-558deb35cad6',
    stage: 'OA',
    company: 'Affirm',
    position: 'IT Engineer I',
    link: 'https://job-boards.greenhouse.io/affirm/jobs/6342896003?gh_src=689c81d53us',
    ref_id: '',
    apply_date: '2025-02-06',
    location: 'Victoria',
  },
  {
    uuid: '21e02906-5174-48c5-bd99-f892e92aaf7c',
    stage: 'Interviewing',
    company: 'Affirm',
    position: 'Quantitative Analyst I',
    link: 'https://job-boards.greenhouse.io/affirm/jobs/6318415003',
    ref_id: '',
    apply_date: '2025-01-24',
    location: 'Remote',
  },
  {
    uuid: '404a3a98-4417-40da-9e0c-180b1af560b1',
    stage: 'Failed',
    company: 'Affirm',
    position: 'Software Engineer I',
    link: 'https://job-boards.greenhouse.io/affirm/jobs/6255596003?gh_src=689c81d53us',
    ref_id: '6255596003',
    apply_date: '2024-11-28',
    location: 'Victoria',
  },
  {
    uuid: '5a502502-d3cc-4264-984b-7df1cdab2d0f',
    stage: 'Offer',
    company: 'Affirm',
    position: 'Software Engineer I, Backend (ML Platform)',
    link: 'https://job-boards.greenhouse.io/affirm/jobs/6317096003',
    ref_id: '',
    apply_date: '2025-01-24',
    location: 'Remote',
  },
  // {
  //   uuid: 'ec77eb07-10a7-4cc7-82f6-864bd7e7dd34',
  //   stage: 'Rejected',
  //   company: 'Amazon',
  //   position: 'Data Engineer I, Workforce Solutions - Analytics and Tech',
  //   link: 'https://www.amazon.jobs/en/jobs/2798201/data-engineer-i-workforce-solutions-analytics-and-tech?cmpid=SPLICX0248M&ss=paid&utm_campaign=cxro&utm_content=job_posting&utm_medium=social_media&utm_source=linkedin.com',
  //   ref_id: '2798201',
  //   apply_date: '2024-11-28',
  //   location: 'Vancouver',
  // },
  {
    uuid: 'f1766fcf-ffd6-44b5-b54e-9baab0beb5a3',
    stage: 'Rejected',
    company: 'Amazon',
    position: 'Software Development Engineer - 2025 (Canada)',
    link: 'https://www.amazon.jobs/en/jobs/2828255/software-development-engineer-2025-canada',
    ref_id: '2828255',
    apply_date: '2024-11-28',
    location: 'Calgary, Toronto, Vancouver',
  },
  // {
  //   uuid: 'f8b3b523-c20f-4652-883f-f2bbe7351cb7',
  //   stage: 'OA',
  //   company: 'Amazon',
  //   position: 'Software Development Engineer I, 2025',
  //   link: 'https://www.amazon.jobs/en/jobs/2849985/software-development-engineer-i-2025',
  //   ref_id: '2849985',
  //   apply_date: '2024-12-29',
  //   location: 'Toronto',
  // },
  // {
  //   uuid: '78b972ea-a101-4426-9ad7-9c775b1b5460',
  //   stage: 'Applied',
  //   company: 'Amplifier Health',
  //   position: 'Software Engineer',
  //   link: 'https://www.linkedin.com/jobs/view/4093223503',
  //   ref_id: '',
  //   apply_date: '2025-01-08',
  //   location: 'Calgary',
  // },
  // {
  //   uuid: '24aad126-bb97-4491-ac3f-e6ec85ecd8f3',
  //   stage: 'Rejected',
  //   company: 'Autodesk',
  //   position: 'Software Developer',
  //   link: 'https://autodesk.wd1.myworkdayjobs.com/en-US/Ext/job/Software-Engineer_24WD80693-1',
  //   ref_id: '24WD80693',
  //   apply_date: '2024-12-18',
  //   location: 'Remote',
  // },
  // {
  //   uuid: 'eb6eba39-bebb-42dc-a7ee-c9425ef807d6',
  //   stage: 'Rejected',
  //   company: 'Autodesk',
  //   position: 'Software Engineer',
  //   link: 'https://autodesk.wd1.myworkdayjobs.com/Ext/job/Ontario-CAN---Remote/Software-Dev-Engineer-2--5102-_24WD84459-1?src=JB-10065&source=LinkedIn',
  //   ref_id: '24WD84459',
  //   apply_date: '2024-12-18',
  //   location: 'Remote',
  // },
  // {
  //   uuid: '063c7295-d51d-45e2-a0b3-0875d5ac04ad',
  //   stage: 'Applied',
  //   company: 'Bank of Canada',
  //   position: 'Developer, Recent Graduates',
  //   link: 'https://careers.bankofcanada.ca/job/Ottawa-or-Calgary-Developer%2C-Recent-Graduates-ON/588635517/?utm_source=LINKEDIN&utm_medium=referrer',
  //   ref_id: '10581',
  //   apply_date: '2025-01-20',
  //   location: 'Calgary, Ottawa',
  // },
  // {
  //   uuid: 'edc05d2d-f45f-4dd3-a42d-afc6817c17cf',
  //   stage: 'To apply',
  //   company: 'BC Energy Regulator',
  //   position: '',
  //   link: 'https://iaaxzv.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/bc-er/requisitions',
  //   ref_id: '',
  //   apply_date: '2024-12-09',
  //   location: '',
  // },
  // {
  //   uuid: '2164fe6d-9771-481c-9948-b460b4e14442',
  //   stage: 'Applied',
  //   company: 'BC Transit',
  //   position: 'Intermediate Data Analyst',
  //   link: 'https://jobs.bctransit.com/job/Victoria-Intermediate-Data-Analyst-BC/729293547/',
  //   ref_id: '',
  //   apply_date: '2025-01-20',
  //   location: 'Victoria',
  // },
  // {
  //   uuid: '1da9f190-d6ef-4bea-bbf3-0fc8d7e7723e',
  //   stage: 'Rejected',
  //   company: 'Blackrock',
  //   position: 'Back-End Engineer, ETF Engineering, Associate',
  //   link: 'https://careers.blackrock.com/job/new-york/back-end-engineer-etf-engineering-associate/45831/71080506320',
  //   ref_id: 'R245787',
  //   apply_date: '2024-12-13',
  //   location: 'New York',
  // },
  // {
  //   uuid: 'e47af432-6a28-4d8c-ad79-b3ada59b6ec2',
  //   stage: 'Applied',
  //   company: 'BMO',
  //   position: 'Junior Software Developer, New or Recent Graduate',
  //   link: 'https://bmo.wd3.myworkdayjobs.com/en-US/External/job/Junior-Software-Developer--New-or-Recent-Graduate_R240028898',
  //   ref_id: 'R240028898',
  //   apply_date: '2025-01-20',
  //   location: 'Toronto',
  // },
  // {
  //   uuid: 'd40544b4-ee16-4da4-94a1-fdfb8c4393e1',
  //   stage: 'Applied',
  //   company: 'Bond Brand Loyalty',
  //   position: 'Jr. Software Developer',
  //   link: 'https://recruiting.ultipro.ca/BON5000BNDB/JobBoard/eb7d7432-cfba-48e5-8275-c07a28b57d48/OpportunityDetail?opportunityId=f4301e95-50ad-404d-b112-bd73b55c6c3e&source=LinkedIn',
  //   ref_id: 'JRDEV002044',
  //   apply_date: '2024-12-24',
  //   location: 'Toronto',
  // },
  // {
  //   uuid: '3f4a3ac7-a713-4886-86e1-09b3e5043101',
  //   stage: 'Applied',
  //   company: 'BrainBox AI',
  //   position: 'Software Developer I',
  //   link: 'https://brainboxai.bamboohr.com/careers/155',
  //   ref_id: '',
  //   apply_date: '2025-01-28',
  //   location: 'Montreal',
  // },
  // {
  //   uuid: '731a23a6-28ab-4243-8532-3bb5f886dac5',
  //   stage: 'Applied',
  //   company: 'Buyerlink',
  //   position: 'Python Engineer',
  //   link: 'https://buyerlink.applytojob.com/apply/CqPlE6ltVP/Python-Engineer',
  //   ref_id: '',
  //   apply_date: '2025-02-06',
  //   location: 'Victoria',
  // },
  // {
  //   uuid: 'b8db507d-2726-49d3-9385-7b8095c19512',
  //   stage: 'Failed',
  //   company: 'ByteDance',
  //   position: 'Backend Software Engineer Graduate (Global E-commerce-US) - 2025 Start (BS/MS)',
  //   link: 'https://jobs.bytedance.com/en/position/7396818688756451622/detail',
  //   ref_id: 'A161374',
  //   apply_date: '2025-01-09',
  //   location: 'Seattle',
  // },
  // {
  //   uuid: 'ada882a3-98f7-4b2f-ad8e-f6dd6437b7f5',
  //   stage: 'To apply',
  //   company: 'Canada Life',
  //   position: '',
  //   link: 'https://www.careers.canadalife.com/',
  //   ref_id: '',
  //   apply_date: '2024-12-09',
  //   location: '',
  // },
  // {
  //   uuid: '6d2e31da-37f5-499a-b949-0c7d023e0fa7',
  //   stage: 'Applied',
  //   company: 'Canadian Security Intelligence Service',
  //   position: 'Software Developer',
  //   link: 'https://www.canada.ca/en/security-intelligence-service/corporate/csis-jobs/available-jobs/software-developer.html',
  //   ref_id: '24-968-07-081',
  //   apply_date: '2024-12-27',
  //   location: 'Ottawa',
  // },
  // {
  //   uuid: 'ff5a1ce2-c161-47dc-8fc7-8ad8a8ef95b2',
  //   stage: 'Rejected',
  //   company: 'Canonical',
  //   position: 'Software Engineer - Stores',
  //   link: 'https://boards.greenhouse.io/canonicaljobs/jobs/6423455?gh_src=fc767b821us',
  //   ref_id: '6423455',
  //   apply_date: '2024-12-31',
  //   location: 'Remote',
  // },
  // {
  //   uuid: '21389958-4135-4646-95c1-8b867f75989a',
  //   stage: 'Applied',
  //   company: 'Capgemini',
  //   position: 'Python Developer',
  //   link: 'https://www.capgemini.com/jobs/162137-en_US+sap_btp/',
  //   ref_id: '162137-en_US',
  //   apply_date: '2025-02-06',
  //   location: 'Montreal',
  // },
  // {
  //   uuid: '6a27744b-5909-486e-8bf3-8ea90f6d16dc',
  //   stage: 'Applied',
  //   company: 'Capital One',
  //   position: 'Associate, Software Engineer',
  //   link: 'https://capitalone.wd12.myworkdayjobs.com/en-US/Capital_One/job/Associate--Software-Engineer---New-Grad_R207372',
  //   ref_id: 'R207372',
  //   apply_date: '2025-02-06',
  //   location: 'Toronto',
  // },
  // {
  //   uuid: 'f143f8a4-40ca-4203-814b-d37fd8658ece',
  //   stage: 'Rejected',
  //   company: 'Capital One',
  //   position: 'Associate, Software Engineer - New Grad',
  //   link: 'https://www.capitalonecareers.ca/job/-/-/234/73601330560?p_sid=T4wLxgb&p_uid=dxXOOLbPlm&source=rd_linkedin_job_posting_tm&ss=paid&utm_campaign=canada_24&utm_content=pj_board&utm_medium=jobad&utm_source=linkedin+slotted',
  //   ref_id: 'OR049153',
  //   apply_date: '2024-11-27',
  //   location: 'Canada, Toronto',
  // },
]
export { applications };
