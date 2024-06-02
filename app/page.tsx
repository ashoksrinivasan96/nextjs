
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">submitted by - Ashok Srinivasan G</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="test">
       <div>
      <h2 className="mt-8 mb-8">1. Rank your 5 most favourite and 5 least favourite support tasks.</h2>

      <h3 className="mt-4 mb-4">Most favourite tasks</h3>

<ol>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Dig through logs to troubleshoot a customer&apos;s broken project </h4>
    I find great satisfaction in solving complex problems after navigating through tons of seemingly gibberish stack traces. It makes me feel like a detective when I identify, analyze and resolve issues via clues (logs).
  </li>
  <li>
    <h4 className="mb-2">Help train and onboard new support teammates</h4>
    Since my Engineering days, I have always enjoyed teaching and explaining concepts to others with a creative approach. This is because training concepts to people(both new and experienced) helps reinforce my own understanding, while it also enables the person to develop their skills. This also helps build a strong relationship and lead to a more productive and enjoyable work environment
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Work with engineering teams during incidents and provide updates to internal and external stakeholders </h4>
    I enjoy working with the engineering teams during an incident as it helps me deepen my own knowledge. Engineers who developed the platform have a different way of troubleshooting issues and understanding their perspective will broaden my techniques in troubleshooting and resolving issues. Working with them also gives me the opportunity to work on my communication skills. This is because we often have to convey complex information in a more understandable way to non-technical audiences.
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub </h4>
    As an open source contributor, I take a sense of pride when I contribute by helping in improving a popular tool/framework used by many developers worldwide. Identifying bugs often involves diving deep into the code base, which allows me to understand the overall product architecture and gain useful knowledge
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Work with 3rd party partners to track down a tricky situation for a joint customer </h4>
    Working with 3rd party vendors will allow me to learn a new technology/integration and widen my knowledge. It may also help me build professional relationships across different organisations. Not to mention, if the issue is resolved, it would directly impact the customer&rsquo;s experience and satisfaction
  </li>
</ol>
</div> 
<div>
<h3 className="mt-4 mb-4">Least favourite tasks:</h3>
<ol>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Help resolve billing issues for customers </h4>
    I feel this would be a fairly easy challenge as it would not involve complex troubleshooting
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Run ticket review sessions to make sure tone is consistent </h4>
    This would be useful when you are fairly new to the role - but often becomes repetitive and mundane once you have some experience
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems</h4>
    As an introvert, I feel uncomfortable addressing more than 5 people at once. I feel there is a higher risk of miscommunication/misunderstanding in such a situation
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Scheduling time-off coverage and collaborating as part of a growing cohesive support team </h4>
    As an individual contributor, I feel it would be an extra curricular work that can be better managed by someone with an experience in People Management skills
  </li>
  <li className="mb-3 mt-3">
    <h4 className="mb-2">Analyze hundreds of support tickets to spot trends the product team can use </h4>
    I feel this would be time consuming and tedious and could be done by a full-time data analyst
  </li>
</ol>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">2. What do you want to learn or do more of at work?</h2>

<p>I want to learn new technologies, and develop internal tools that would boost the Support team&apos;s productivity</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">3. Describe how you solved a challenge or technical issue that you faced in a previous role(preferably in a previous support role). How did you determine that your solution was successful? </h2>
<p>A customer had a high severity technical challenge when they migrated from their existing payment provider to a new one. <br /> <br/>The problem arose when their end users attempted to place an order with a saved payment instrument resulting in failed transactions. It was determined that the system was still utilizing the old payment provider&apos;s token. <br /> <br/> The resolution was to delete all the existing saved payment instruments with the old token ID.
  However, this was not that simple. <br /> <br/>There were two ways this could be done 1: export all the existing the payment instruments in an xml format, delete the old token, and re-upload the xml. This, however, could have been only be done by the Salesforce Support, as the module to export/import payment instruments was not visible to the customer. The challenge here was, the Support team was instructed not to perform this due to high-risk. <br /> <br/> 2nd method was to create a custom job using the script apis - however, customer was not technically sound. I took an initiative and created a job on my sandbox that performed this action. To test it out, I added dummy data in my sandbox, and ran the job - and it successfully performed the task. After that, I scheduled a quick call with the customer and shared them this code. The customer attempted to run it on a lower environment, and it was successful. Soon after, they ran it on their production instance, and  it was a success. <br /> <br/>
  Their problem was now successfully resolved! The customer closed the case and gave a 5 CSAT score with the following feedback:<br /> <br/>
  &quot;Ashok was very helpful and was dedicated to helping us resolve issues pertaining to customer payments. He went above and beyond to provide the best service I have ever experienced in my professional career.&quot;
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">4. When would you choose to use Edge Functions, Serverless Functions, or EdgeMiddleware with Vercel?</h2>
<p>If we want to modify http headers or implement URL redirects on the CDN layer, Edge functions would be the go to as it offers low latency execution. <br /> <br/>
  If we need to perform dynamic server-side logic such as processing forms, accessing databases, or integrating with third part apis, we can use the serverless functions due to the offered scalability <br /> <br/>
  If we want to add authentication, rate limiting or request logging, Edge middleware would be the right choice. This could be because of the consistency and simplified management
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?</h2>
  <p>I would begin by asking the customer to share the specific details of their build issue such as the error logs or messages, and the steps that they have already taken to resolve the issue. I would also ask them if they have referred any documentations. Doing this will ensure that we do not share the same steps or documentations that they have already tried. <br /> <br/> We can then ask details such as version of the framework, what environment they are running on and relevant dependencies. We can also ask if they made any recent changes, and if rolling those changes back makes any difference. <br /> <br/>
 Next, I will try to setup the integration on my local system by referencing the documentation. Once the setup is complete, I will attempt to reproduce the issue and isolate the problem by identifying whether the issue is with the Customer’s config, or with the product itself. <br /> <br/>I would examine the basics such as reviewing typos, permission sets in the config or verifying networking connectivity. I would then check dependency conflicts, build scripts and compatibility issues.
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">6. The customer from question 5 replies to your response with the below:&ldquo;I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.&rdquo;Please write a follow-up reply to the customer.</h2>
<p>Hi &ldquo;CustomerName&rdquo;,<br /><br />I am really sorry for the challenges that you have encountered while trying to resolve this issue. <br /><br /> As a Support representative, I truly understand how important this setup could be for your business requirement. Please rest assured that I am here to assist you and will try my best to resolve your issue. <br /><br />
  I acknowledge your concern about this potentially being a platform issue, however, in order to effectively troublehsoot, I’ll still require the information requested in my previous comment.<br /><br />
  Could you please share the requested information so that I can review and proceed with this investigation? <br /><br />
  I am also more than happy to schedule a call and discuss the same. If you are in align with this idea, please do share your time of availability. <br /><br />
  Looking forward to your response.<br /><br />
  Kind regards,<br /><br />Ashok Srinivasan G<br /><br />Senior Support Engineer | Vercel
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">7. A customer writes in to the Helpdesk asking &quot;How do I do a redirect from the /blogpath to https://example.com?&quot; Please write a reply to the customer. Feel free to add anyinformation about your decision making process after the reply.</h2>
<p>Hi &ldquo;Customer’s name&rdquo;, <br /><br />Thank you for contacting Vercel Support. My name is Ashok, and I here to assist you with all your queries and concerns.<br /><br />
  I understand from the issue description that you are currently seeking the information on how to setup external URL redirects. Please feel free to let me know if my understanding of your issue is incorrect. <br /><br />
  You can achieve the URL redirects by modifying your next.config.js file. Here’s the sample code: </p> <br /><br />
  <pre>
    <code>
    {`module.exports = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com',
        permanent: true
      },
    ];
  },
};`}
</code>
</pre>

  <p>You may also refer the following documentation: &lt;https://nextjs.org/docs/pages/api-reference/next-config-js/redirects&gt;<br /><br />
  I hope this helps! If you have any follow up questions or concerns, please do not hesitate to let me know. I am here at your service!<br /><br />
  Kind regards,<br /><br />
  Ashok Srinivasan G <br /><br />
  Senior Support Engineer | Vercel
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">8. A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.</h2>
<p>Hi &ldquo;Customer’s name&rdquo;, <br /><br /> 
  
  Hope you are having a fantastic day!<br /> <br/>Thank you for contacting Vercel Support. My name is Ashok, and I here to assist you with all your queries and concerns. <br /><br />

  I understand from the issue description that you are currently seeking the information on how to prevent your site from being indexed by the search engines. <br /><br />
  This can be achieved by creating a robots.txt file in the public directory of your project. Once the file is created, please add the following lines in it: <br /><br />
  User-agent: *Disallow: / <br /><br />
  The above directive instructs all search engine crawlers to refrain from crawling any pages on your site.<br /><br />
  You can also refer this documentation for more details: &lt;https://www.cloudflare.com/learning/bots/what-is-robots-txt/&gt;<br /><br />
  Please try the above steps and let me know if you have any follow up questions or concerns.<br /><br />
  Kind regards, <br /><br />Ashok Srinivasan G <br /><br /> Senior Support Engineer | Vercel
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">9. What do you think is one of the most common problems which customers ask Vercel for help with?How would you help customers to overcome common problems, short-term and long-term?</h2>
<p>I think most of the common problems would revolve around the deployment issues. These could include issues with configuring the deployment settings, errors during the deployment build process, or challenges with integrating with other services or frameworks. <br /> <br/> Some short term solutions would involve forming a responsive support team, providing clear documentation with FAQs. <br /> <br/>
  Long term solution would be creating diagnostic tools that may check common issues, create training/certification workshops to educate the customers, and take feedback from the customers to improve the platform
</p>
</div>
<hr className="mt-8 mb-8"></hr>
<div>
<h2 className="mt-8 mb-8">10. How could we improve or alter this familiarisation exercise? </h2>
<p>
  If the goal is to familiarize people with vercel products, I would suggest gamification. More details:&lt;https://accessally.com/blog/gamified-learning/c&gt;
</p>
</div>
<hr className="mt-8 mb-8"></hr>

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
