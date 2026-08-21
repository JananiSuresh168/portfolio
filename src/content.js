export const profile = {
  name: 'Jan Suresh',
  role: 'Software Engineer',
  location: 'Toronto, Ontario',
  email: 'jananisuresh818@gmail.com',
  phone: '226-975-4716',
  linkedin: 'https://www.linkedin.com/in/jansuresh/',
  tagline:
    'I build the cloud infrastructure and data pipelines that carry other teams’ work — and, lately, the AI agents that run alongside them.',
  availability: 'Canadian Permanent Resident · Open to work, remote or on-site',
}

export const about = {
  lead: 'Four years of building systems that are supposed to be invisible.',
  body: [
    'Software engineer with 4 years of experience building cloud infrastructure, backend services, and data pipelines in Canada. Deep hands-on expertise across AWS (EMR, EKS, Lambda, Glue), distributed data systems (Spark, Kafka, Airflow), and infrastructure as code with Terraform.',
    'Recently focused on designing AI agents and MCP-based tooling to automate engineering workflows — the parts of the job that quietly take hours and shouldn’t.',
  ],
}

export const figures = [
  { value: '4 yrs', label: 'Cloud & data infrastructure' },
  { value: '300K+', label: 'Events per day in production' },
  { value: '60%', label: 'Lower compute cost on ETL' },
]

export const experience = [
  {
    company: 'Armo TechSolutions',
    location: 'Chennai, India',
    dates: 'Jul 2023 — Present',
    roles: [
      {
        title: 'Software Engineer II',
        dates: 'Mar 2025 — Present',
        bullets: [
          'Owned infrastructure architecture for AWS ETL pipeline; ran trade-off analysis across EMR Serverless, EKS, AWS Glue, and AWS Lambda, reducing compute costs by over 60% while sustaining throughput SLAs.',
          'Designed and shipped AI agents using the Anthropic API, MCP (Model Context Protocol) servers, and prompt engineering to automate deployment plans and GitHub/Confluence workflows, saving 3+ hours of manual effort per sprint.',
          'Contributed to Azure-to-AWS migration of Spark/EMR ETL pipelines generating risk events for 1M+ internet-facing assets, refactoring jobs to use S3, AWS Glue Data Catalog, and Athena.',
          'Instituted team-wide observability standards using Grafana, Prometheus, OpsGenie, and CloudWatch; introduced sprint-based DRI rotation reducing incident escalations by ~80%.',
          'Built backend services in Go/Python on Amazon EKS, including a Redis proxy for the ETL pipeline and Redis-backed caching for high-traffic APIs.',
        ],
      },
      {
        title: 'Software Engineer',
        dates: 'Jul 2023 — Feb 2025',
        bullets: [
          'Designed production REST APIs and security-critical features in Go and Python, deployed as containerized microservices on Amazon EKS with Docker and Helm.',
          'Built scalable, distributed, high-throughput (300k+ events/day) data pipelines using Apache Spark on EMR, Apache Kafka (custom producers/consumers), Airflow DAGs, and Iceberg/Parquet on S3, enabling near-real-time risk generation for 1000+ enterprise customers across 9 AWS deployment zones.',
          'Authored Terraform modules for end-to-end IaC on the Mobile Security platform: IAM roles, VPC/Route53 networking, MSK (Kafka) clusters, Aurora/RDS, Lambda, S3, and GitHub Actions CI/CD, cutting infra overhead by 50%.',
          'Mentored 10+ interns and co-ops; conducted technical interviews and led code reviews promoting secure, scalable engineering practices.',
        ],
      },
    ],
  },
  {
    company: 'Prodigy Education',
    location: 'Toronto, Canada',
    dates: 'Sep 2022 — Dec 2022',
    roles: [
      {
        title: 'Engineering Developer Co-op',
        dates: 'Sep 2022 — Dec 2022',
        bullets: [
          'Shipped production features for a React Native student-facing mobile application used by 1M+ students across North America.',
          'Maintained CI/CD pipelines using GitHub Actions, reducing mobile app deployment time by 40% across iOS and Android.',
          'Containerized development environments using Docker, eliminating “works on my machine” issues across a team of 8+ engineers.',
          'Worked in an Agile/Scrum delivery team tracking work in Jira, with sprint planning, peer code review, and 15+ pull requests reviewed by senior engineers using pull-request and branching workflows.',
        ],
      },
    ],
  },
]

export const education = [
  {
    institution: 'University of Windsor',
    location: 'Windsor, Ontario',
    degree: 'Master’s in Applied Computing',
    dates: 'Sep 2021 — Dec 2022',
    gpa: 'CGPA 8.93 / 10',
  },
  {
    institution: 'Rajalakshmi Engineering College',
    location: 'Chennai, India',
    degree: 'Bachelor of Computer Engineering',
    dates: 'Aug 2017 — Jun 2021',
    gpa: 'CGPA 8.52 / 10',
  },
]

export const skills = [
  { category: 'Languages', items: ['Python', 'Go', 'SQL', 'Bash', 'Java', 'C++', 'C'] },
  {
    category: 'Cloud',
    items: [
      'AWS EMR',
      'EMR Serverless',
      'EKS',
      'Lambda',
      'S3',
      'IAM',
      'RDS',
      'Aurora',
      'Glue',
      'Athena',
      'CloudWatch',
      'VPC',
      'Route53',
      'SQS',
      'SNS',
      'Azure',
    ],
  },
  {
    category: 'Infrastructure',
    items: ['Terraform', 'Kubernetes', 'Docker', 'Helm', 'GitHub Actions', 'CI/CD', 'Jenkins'],
  },
  {
    category: 'Data & streaming',
    items: ['Apache Spark', 'Kafka', 'Airflow', 'Iceberg', 'Parquet', 'Trino/Presto', 'ETL'],
  },
  { category: 'APIs', items: ['REST', 'gRPC', 'Protobuf', 'JSON', 'OAuth2', 'JWT'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Aurora', 'Redis'] },
  { category: 'Observability', items: ['Grafana', 'Prometheus', 'OpsGenie', 'CloudWatch'] },
  {
    category: 'AI',
    items: ['AI agents', 'Model Context Protocol', 'Prompt engineering', 'Anthropic Claude API', 'OpenAI API', 'RAG'],
  },
]

const CREDLY_PROFILE = 'https://www.credly.com/users/janani-suresh.91a696fb'

export const certifications = [
  { name: 'AWS Certified Developer', level: 'Associate', issuer: 'Amazon Web Services', url: CREDLY_PROFILE },
  { name: 'AWS Certified Solutions Architect', level: 'Associate', issuer: 'Amazon Web Services', url: CREDLY_PROFILE },
  { name: 'AWS Certified Cloud Practitioner', level: 'Foundational', issuer: 'Amazon Web Services', url: CREDLY_PROFILE },
  { name: 'Terraform Associate', level: 'Associate', issuer: 'HashiCorp', url: CREDLY_PROFILE },
]

export const projects = []
