// Experince.jsx

import { ExperinceCard } from "./ExperinceCard"

export const Experince = () => {
  return (
    <div style={{ backgroundColor: '#1C1C1C' }} className="px-6 md:px-20 py-20">
      <div>
        <h2 className="text-6xl lg:text-7xl font-bold text-gray-400 leading-tight">
          Experience
        </h2>
        <p className="text-xl sm:text-2xl md:text-4xl mt-6 font-semibold text-white pt-8 md:pt-16">
          Thinking about working with me? Check out what I can do below and see how I can help bring your vision to life.
        </p>
      </div>

      {/** Timeline Entries */}
      <div className="space-y-24 mt-16">
        {/* Entry 1 */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="text-white flex flex-col gap-2 min-w-[200px]">
            <h6 className="text-sm font-light">01</h6>
            <h2 className="text-3xl md:text-5xl font-semibold">Everymedia</h2>
            <h5 className="text-gray-400 text-base">Currently</h5>
          </div>
          <div className="md:w-2/3">
            <ExperinceCard
              title="Associate DevOps"
              responsibilities={[
                "Deployed and managed MERN and WordPress websites on LAMP environments, optimizing server configurations for high availability and performance.",
                "Automated workflows using AWS S3 for CDN delivery, cronjobs for backups, and SSL for secure connections to enhance reliability and security.",
                "Configured servers and infrastructure to ensure zero downtime and fast loading for websites. Deployed and maintained a serverless, auto-scaling architecture for WordPress websites, with multi-level security implemented via Cloudflare."
              ]}
              tags={["Digital Ocean", "AWS", "Cloudflare"]}
            />
          </div>
        </div>

        {/* Entry 2 */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="text-white flex flex-col gap-2 min-w-[200px]">
            <h6 className="text-sm font-light">02</h6>
            <h2 className="text-3xl md:text-5xl font-semibold">Dronapay</h2>
            <h5 className="text-gray-400 text-base">2024</h5>
          </div>
          <div className="md:w-2/3">
            <ExperinceCard
              title="Cloud Infra Associate"
              responsibilities={[
                "Monitored and maintained the infrastructure using Grafana dashboards, performing standard checks, and troubleshooting issues through log analysis and diagnostic tools.",
                "Built and deployed infrastructure as code (IaC) using Terraform to ensure scalability, reliability, and version control.",
                "Implemented GitOps principles for CI/CD, utilizing Jenkins for building pipelines and ArgoCD for automated deployments.",
                "Managed and scaled applications and nodes across a multi-cloud infrastructure, ensuring high availability and performance optimization.",
                "Created and maintained Bash scripts for automated backup of critical logs, improving operational efficiency.",
                "Worked extensively on AWS services to manage the entire cloud infrastructure, ensuring secure, cost-effective, and scalable solutions."
              ]}
              tags={["Digital Ocean", "AWS", "Cloudflare"]}
            />
          </div>
        </div>

        {/* Entry 3 */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="text-white flex flex-col gap-2 min-w-[200px]">
            <h6 className="text-sm font-light">03</h6>
            <h2 className="text-3xl md:text-5xl font-semibold">Travstack</h2>
            <h5 className="text-gray-400 text-base">2022</h5>
          </div>
          <div className="md:w-2/3">
            <ExperinceCard
              title="Jr. DevOps Engineer"
              responsibilities={[
                "Working with Databases like Redis and MongoDB Atlas",
                "Developed and maintained automated CI/CD pipelines for code deployment using Jenkins",
                "Provisioned Servers and deployed features using Terraform",
                "Working with CDN, Monitoring Nginx Metrics using Prometheus",
                "Auto-scaling pods using Kube metrics - Limits and resources to prevent pods crashing",
                "Infrastructure Monitoring and Alerting using Prometheus and Grafana",
                "Setup and Migration from Standalone MongoDB to Atlas"
              ]}
              tags={["Digital Ocean", "AWS", "Cloudflare"]}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
