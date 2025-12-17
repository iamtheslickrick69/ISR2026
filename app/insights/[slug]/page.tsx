'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

// Blog post data
const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  author: string;
  content: {
    intro: string;
    sections: { heading: string; paragraphs: string[] }[];
    conclusion: string;
  };
}> = {
  'why-90-percent-ai-projects-fail': {
    title: 'Why 90% of AI Projects Fail After POC',
    date: 'December 2024',
    readTime: '8 min read',
    author: 'Haestus Team',
    content: {
      intro: 'The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.',
      sections: [
        {
          heading: 'The POC Trap',
          paragraphs: [
            'Every week, we see companies celebrating successful AI proof-of-concepts. The model works. The demo is impressive. Stakeholders are excited. Then... nothing.',
            'The project dies in a graveyard of "promising initiatives" that never made it to production. Why? Because a POC optimized for the demo room rarely survives contact with real users, real data, and real-world constraints.',
            'The problem isn\'t the AI. It\'s the architecture—or lack thereof.'
          ]
        },
        {
          heading: 'Why Most AI Projects Die',
          paragraphs: [
            '1. **No Production Architecture** - POCs are built for demos, not deployment. They lack error handling, monitoring, scalability, and security. Moving to production requires rebuilding from scratch.',
            '2. **Data Pipeline Fragility** - POCs use clean, curated datasets. Production faces messy, incomplete, constantly changing data. Without robust pipelines, the model breaks.',
            '3. **Integration Hell** - AI doesn\'t live in isolation. It needs to connect to existing systems, APIs, databases. POCs skip this complexity. Production can\'t.',
            '4. **Cost Explosion** - What worked on 1,000 test records becomes prohibitively expensive at 1 million production queries. Without cost optimization from day one, budgets explode.',
            '5. **No Feedback Loop** - POCs are static. Production systems need continuous learning, model retraining, performance monitoring. Without this infrastructure, models degrade over time.'
          ]
        },
        {
          heading: 'The Architecture-First Solution',
          paragraphs: [
            'At Haestus, we don\'t build POCs. We build production systems from day one.',
            'Every project starts with architecture: How will this scale? How will we monitor it? How will we handle errors? How will we integrate it? How will we retrain it?',
            'This approach takes longer upfront. But it means we ship systems that work on day 1 and keep working on day 1,000.',
            'We\'ve achieved a 100% production success rate—not because we\'re lucky, but because we architect for reality, not demos.'
          ]
        },
        {
          heading: 'What To Do Instead',
          paragraphs: [
            'If you\'re planning an AI project, ask these questions before writing a single line of code:',
            '• How will this system handle 10x the expected load?',
            '• What happens when the model fails? (It will.)',
            '• How will we monitor model performance over time?',
            '• What\'s our plan for data drift and model retraining?',
            '• How does this integrate with our existing systems?',
            '• What\'s the total cost at production scale?',
            'If you can\'t answer these questions, you\'re not ready for production. And that POC you\'re celebrating? It\'s probably going to join the other 90%.'
          ]
        }
      ],
      conclusion: 'AI projects don\'t fail because of the technology. They fail because of the architecture. Build for production from day one, or don\'t build at all.'
    }
  },
  'architecture-first-approach': {
    title: 'The Architecture-First Approach to AI',
    date: 'December 2024',
    readTime: '6 min read',
    author: 'Haestus Team',
    content: {
      intro: 'Building AI systems that scale requires thinking beyond the model. Here\'s why architecture comes first.',
      sections: [
        {
          heading: 'Beyond the Model',
          paragraphs: [
            'When most teams think "AI project," they think about the model. Which LLM? What temperature? How many tokens? These questions matter—but they\'re not where you should start.',
            'The model is a component. The architecture is the system. And systems are what scale, survive, and create lasting value.',
            'Great AI projects start with architecture. The model is just one piece of a larger puzzle.'
          ]
        },
        {
          heading: 'The Five Pillars of AI Architecture',
          paragraphs: [
            '**1. Data Infrastructure** - How data flows from source to model to output. Pipelines, transformations, validation, storage.',
            '**2. Model Orchestration** - How multiple models work together. Routing logic, fallbacks, ensemble strategies.',
            '**3. Integration Layer** - How AI connects to existing systems. APIs, webhooks, event streams, databases.',
            '**4. Monitoring & Observability** - How you know what\'s working and what isn\'t. Logging, metrics, alerts, debugging.',
            '**5. Feedback Loops** - How the system improves over time. User feedback, model retraining, A/B testing, continuous learning.'
          ]
        },
        {
          heading: 'Why This Matters',
          paragraphs: [
            'Without solid architecture, even the best model will fail in production. We\'ve seen it happen:',
            '• A customer service chatbot that gave perfect answers in testing but crashed under real traffic',
            '• A recommendation engine that worked brilliantly until the data schema changed',
            '• A document analysis tool that cost $50,000/month in API calls because no one thought about batching',
            'Each failure came from the same root cause: focusing on the model instead of the system.'
          ]
        },
        {
          heading: 'How We Build',
          paragraphs: [
            'At Haestus, we start every project with architecture. Before we choose a model, we ask:',
            '• What are the failure modes?',
            '• What are the scalability constraints?',
            '• What are the integration requirements?',
            '• What are the cost implications?',
            '• What are the monitoring needs?',
            'Only then do we pick the model. Because a mediocre model in a great architecture will outperform a great model in no architecture.'
          ]
        }
      ],
      conclusion: 'AI projects succeed or fail based on architecture, not models. Build the foundation first. Everything else follows.'
    }
  },
  'humans-over-automation': {
    title: 'Humans Over Automation: A Framework',
    date: 'November 2024',
    readTime: '7 min read',
    author: 'Haestus Team',
    content: {
      intro: 'AI should amplify human capability, not replace it. Here\'s how we think about the balance.',
      sections: [
        {
          heading: 'The Automation Trap',
          paragraphs: [
            'The most common mistake in AI implementation is trying to automate humans out of the loop entirely.',
            'Companies rush to "full automation"—chatbots that replace support teams, systems that make decisions without human oversight, tools that eliminate entire roles.',
            'Sometimes this works. Often it backfires. Because the goal isn\'t automation. The goal is amplification.'
          ]
        },
        {
          heading: 'Amplification Over Automation',
          paragraphs: [
            'The best AI systems don\'t replace humans. They make humans superhuman.',
            '**Bad AI:** Automated customer service that frustrates customers and can\'t handle edge cases.',
            '**Good AI:** AI-assisted support that gives agents instant access to knowledge, suggested responses, and sentiment analysis—so they can help customers better and faster.',
            '**Bad AI:** Fully automated hiring that screens out great candidates because they don\'t fit a pattern.',
            '**Good AI:** Resume screening that highlights promising candidates and flags potential issues—so recruiters can make better decisions, faster.',
            'See the pattern? The human stays in the loop. The AI amplifies their capability.'
          ]
        },
        {
          heading: 'When to Automate vs Amplify',
          paragraphs: [
            '**Automate when:**',
            '• The task is high-volume, low-stakes, and repetitive',
            '• Errors are cheap and easily reversible',
            '• The process is well-defined with clear rules',
            '• Human judgment adds little value',
            '',
            '**Amplify when:**',
            '• The task requires judgment, context, or nuance',
            '• Errors are expensive or hard to fix',
            '• Edge cases are common',
            '• Human expertise creates competitive advantage',
            '',
            'Most business-critical tasks fall into the second category. Which is why most AI should amplify, not automate.'
          ]
        },
        {
          heading: 'Building for Amplification',
          paragraphs: [
            'Amplification-first AI looks different from automation-first AI:',
            '• **Transparency** - Show the human what the AI is doing and why',
            '• **Control** - Let the human override, adjust, or guide the AI',
            '• **Context** - Give the AI access to what the human knows',
            '• **Feedback** - Let the human teach the AI when it\'s wrong',
            'This is harder to build than full automation. But it creates systems that are more robust, more valuable, and more trusted.'
          ]
        }
      ],
      conclusion: 'The future isn\'t humans OR AI. It\'s humans AND AI, working together. Build systems that amplify capability, not replace it.'
    }
  },
  'true-cost-technical-debt': {
    title: 'The True Cost of Technical Debt in AI',
    date: 'November 2024',
    readTime: '6 min read',
    author: 'Haestus Team',
    content: {
      intro: 'Shortcuts in AI development compound exponentially. Here\'s what technical debt really costs.',
      sections: [
        {
          heading: 'Why AI Debt Is Worse',
          paragraphs: [
            'Technical debt in traditional software is bad. Technical debt in AI is catastrophic.',
            'In a web app, bad code might slow you down. In an AI system, bad architecture can make the entire system untrainable, undebuggable, and unfixable.',
            'We\'ve seen companies rewrite entire AI systems from scratch because the initial implementation cut corners. The cost? Months of work, millions of dollars, and massive opportunity cost.'
          ]
        },
        {
          heading: 'The Hidden Costs',
          paragraphs: [
            '**1. Model Degradation** - Quick fixes in data pipelines lead to subtle bugs that degrade model performance over time. By the time you notice, you can\'t trace the root cause.',
            '**2. Retraining Hell** - Poor data versioning means you can\'t reproduce training runs. Each iteration becomes a guessing game.',
            '**3. Integration Brittleness** - Hardcoded assumptions and tight coupling mean every system change requires AI changes. Progress grinds to a halt.',
            '**4. Monitoring Blindness** - Without proper observability, you don\'t know when the model fails until customers complain.',
            '**5. Cost Explosion** - Inefficient architectures mean every query costs more. At scale, this can be millions of dollars per year.'
          ]
        },
        {
          heading: 'Where Debt Comes From',
          paragraphs: [
            'AI debt usually starts with good intentions:',
            '• "Let\'s just get a POC working first" (then the POC becomes production)',
            '• "We\'ll add monitoring later" (later never comes)',
            '• "This is just a temporary workaround" (temporary becomes permanent)',
            '• "We need to ship fast" (fast becomes forever)',
            'Each shortcut seems reasonable in the moment. But debt compounds. And in AI, it compounds faster than anywhere else.'
          ]
        },
        {
          heading: 'How to Avoid It',
          paragraphs: [
            '**1. Build Production-Grade from Day One** - Don\'t build POCs. Build systems designed for production, even if you start small.',
            '**2. Invest in Observability** - If you can\'t see what\'s happening, you can\'t fix what\'s broken.',
            '**3. Version Everything** - Data, models, code, config. If you can\'t reproduce it, you can\'t debug it.',
            '**4. Plan for Scale** - Design for 10x your expected load. Scaling up is easier than rebuilding.',
            '**5. Resist "Just This Once"** - Every exception becomes the rule. Hold the line on architecture principles.'
          ]
        }
      ],
      conclusion: 'The cost of doing AI right is high. The cost of doing AI wrong is higher. Take shortcuts at your peril.'
    }
  },
  'beyond-the-hype': {
    title: 'Beyond the Hype: Real AI Capabilities',
    date: 'October 2024',
    readTime: '7 min read',
    author: 'Haestus Team',
    content: {
      intro: 'Separating what AI can actually do from what marketers claim. A reality check for decision makers.',
      sections: [
        {
          heading: 'The Hype Problem',
          paragraphs: [
            'AI marketing has gotten out of hand. Every vendor claims their product will "revolutionize" your business, "eliminate" costs, and "transform" operations.',
            'Meanwhile, actual AI implementations are delivering real but modest improvements. Not magic. Not transformation. Just better outcomes on specific, well-defined tasks.',
            'Let\'s talk about what AI actually does well—and what it doesn\'t.'
          ]
        },
        {
          heading: 'What AI Is Actually Good At',
          paragraphs: [
            '**Pattern Recognition at Scale** - AI excels at finding patterns in large datasets that humans would miss. Fraud detection, anomaly detection, recommendation systems.',
            '**Language Understanding & Generation** - Modern LLMs are genuinely impressive at understanding and generating human-like text. Customer service, content drafting, summarization.',
            '**Prediction & Forecasting** - Given good historical data, AI can predict outcomes better than traditional methods. Demand forecasting, churn prediction, risk assessment.',
            '**Automation of Repetitive Cognitive Tasks** - Data entry, document processing, classification, routing—AI can handle these faster and more accurately than humans.',
            '**Augmenting Human Decision-Making** - Providing context, surfacing insights, suggesting options—AI can make humans more effective at complex tasks.'
          ]
        },
        {
          heading: 'What AI Is Not Good At',
          paragraphs: [
            '**Complex Reasoning** - Despite the hype, AI still struggles with multi-step logical reasoning, especially in novel situations.',
            '**Understanding Context** - AI often misses nuance, sarcasm, cultural context, or unstated assumptions that humans navigate effortlessly.',
            '**Handling True Edge Cases** - AI is trained on patterns. When something genuinely new happens, it fails in unpredictable ways.',
            '**Explaining Its Decisions** - Even "explainable AI" provides correlations, not causation. Understanding why an AI made a decision is still hard.',
            '**Operating Without Quality Data** - Garbage in, garbage out. If your data is messy, incomplete, or biased, AI will amplify those problems.'
          ]
        },
        {
          heading: 'Setting Realistic Expectations',
          paragraphs: [
            'Good AI projects set realistic goals:',
            '• "Reduce customer service response time by 30%" not "eliminate customer service"',
            '• "Flag 90% of potential fraud cases for review" not "stop all fraud automatically"',
            '• "Improve forecast accuracy from 70% to 85%" not "predict the future perfectly"',
            'Notice the pattern? Specific, measurable improvements on well-defined tasks. Not magic. Not transformation. Just better outcomes.'
          ]
        }
      ],
      conclusion: 'AI is a powerful tool for specific, well-defined problems. It\'s not magic. Set realistic expectations, focus on real capabilities, and you\'ll build systems that actually deliver value.'
    }
  },
  'building-ai-teams': {
    title: 'Building AI Teams That Last',
    date: 'October 2024',
    readTime: '8 min read',
    author: 'Haestus Team',
    content: {
      intro: 'The talent shortage is real, but the bigger problem is retention. Here\'s how to build AI teams that stick around.',
      sections: [
        {
          heading: 'The Talent War',
          paragraphs: [
            'Every company wants AI talent. Few companies can attract or keep it.',
            'The standard playbook—hire a PhD, throw money at the problem, hope for the best—doesn\'t work. Top AI talent has options. They can work anywhere. They choose companies that let them do their best work.',
            'What does "best work" mean? It\'s not about ping pong tables or free lunch. It\'s about the work itself.'
          ]
        },
        {
          heading: 'Why AI Talent Leaves',
          paragraphs: [
            '**1. POC Purgatory** - Talented engineers want to ship production systems, not build demos that never launch.',
            '**2. Technical Debt Hell** - Working in poorly architected systems is miserable. Good engineers leave rather than maintain bad code.',
            '**3. Lack of Impact** - If AI projects don\'t ship or don\'t matter, engineers get frustrated and move on.',
            '**4. Tool Restrictions** - Being forced to use outdated tools or prohibited from using modern frameworks drives talent away.',
            '**5. No Growth Path** - If there\'s nowhere to grow technically or no one to learn from, ambitious engineers leave.'
          ]
        },
        {
          heading: 'How to Retain AI Talent',
          paragraphs: [
            '**Ship to Production** - Engineers want to see their work in the real world. Prioritize shipping over perfection.',
            '**Invest in Architecture** - Good engineers are 10x more productive in well-architected systems. Make architecture a priority.',
            '**Give Ownership** - Let engineers own outcomes, not just tasks. Trust them to make decisions.',
            '**Modern Tools** - Don\'t force engineers to use outdated tech. Let them use the best tools for the job.',
            '**Learning Culture** - Create opportunities to learn from each other. Conferences, paper reading groups, internal talks.',
            '**Real Problems** - Work on problems that matter. Engineers want to solve hard problems with real impact.'
          ]
        },
        {
          heading: 'Building vs Buying',
          paragraphs: [
            'Here\'s an unpopular truth: not every company should build an in-house AI team.',
            'Building a great AI team requires:',
            '• Compelling technical problems',
            '• Modern infrastructure and tools',
            '• Senior technical leadership',
            '• Competitive compensation',
            '• A culture that values engineering excellence',
            'If you can\'t provide these, don\'t hire AI engineers. Partner with a firm that can—then hire when you\'re ready to retain them.',
            'Haestus exists for companies in exactly this position. We build production AI systems while helping you build the foundation for an eventual in-house team.'
          ]
        }
      ],
      conclusion: 'Hiring AI talent is hard. Keeping them is harder. Build a culture that values engineering excellence, ship to production, and invest in architecture. Or partner with someone who can.'
    }
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">

          {/* Back Link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Orange Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8"
          />

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-12"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div>
              <span>By {post.author}</span>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 font-light italic border-l-4 border-orange-500 pl-6"
          >
            {post.content.intro}
          </motion.p>

          {/* Content Sections */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {section.heading}
                </h2>
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20"
            >
              <p className="text-xl text-gray-200 leading-relaxed italic">
                {post.content.conclusion}
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/#connect"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
            >
              Ready to Build Production AI?
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
