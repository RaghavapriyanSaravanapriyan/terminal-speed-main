import json
import requests
import datetime

# Configuration
GITHUB_USERNAME = "RaghavapriyanSaravanapriyan"
LINKEDIN_URL = "https://www.linkedin.com/in/raghavapriyan/"

def fetch_github_contributions():
    try:
        url = f"https://github-contributions-api.deno.dev/{GITHUB_USERNAME}/count"
        response = requests.get(url)
        data = response.json()
        return data.get("total", {}).get("lastYear", 0)
    except Exception as e:
        print(f"Error fetching GitHub contributions: {e}")
        return 0

def fetch_linkedin_posts():
    # Mocking 6 recent posts for the portfolio
    return [
        {
            "title": "Excited to share my journey into AI/ML!",
            "date": "2026-03-01",
            "url": "https://www.linkedin.com/posts/raghavapriyan_ai-ml-learning-activity-1234567890",
            "excerpt": "Moving from competitive programming to building intelligent systems. Currently exploring Neural Networks..."
        },
        {
            "title": "Building a Faster Portfolio with Vite & Tailwind",
            "date": "2026-02-25",
            "url": "https://www.linkedin.com/posts/raghavapriyan_webdev-portfolio-activity-0987654321",
            "excerpt": "Performance matters. My new portfolio is live with smooth animations and minimal overhead."
        },
        {
            "title": "Reflections on My First Hackathon at VIT",
            "date": "2026-02-15",
            "url": "https://www.linkedin.com/posts/raghavapriyan_hackathon-vit-activity-1122334455",
            "excerpt": "48 hours of intense coding and learning. Here's what my team and I built during the weekend."
        },
        {
            "title": "Why I'm Bullish on Generative AI in Codebases",
            "date": "2026-02-05",
            "url": "https://www.linkedin.com/posts/raghavapriyan_genai-coding-activity-5544332211",
            "excerpt": "Tools like Copilot and Antigravity are changing the way we think about software engineering."
        },
        {
            "title": "Mastering Advanced Python Patterns",
            "date": "2026-01-20",
            "url": "https://www.linkedin.com/posts/raghavapriyan_python-patterns-activity-9988776655",
            "excerpt": "From decorators to context managers—diving deep into what makes Python truly powerful."
        },
        {
            "title": "Finding the Balance: Academics & Side Projects",
            "date": "2026-01-10",
            "url": "https://www.linkedin.com/posts/raghavapriyan_productivity-vit-activity-6677889900",
            "excerpt": "Maintaining a 9.1 CGPA while building real-world projects is all about time management."
        }
    ]

def fetch_linkedin_certs():
    # Placeholder for LinkedIn certifications sync logic
    return [
        {
            "title": "Generative AI: Introduction and Applications",
            "issuer": "IBM",
            "date": "Feb 2026",
            "skills": ["Artificial Intelligence"]
        },
        {
            "title": "Introduction to Artificial Intelligence (AI)",
            "issuer": "IBM",
            "date": "Feb 2026",
            "skills": ["Artificial Intelligence"]
        },
        {
            "title": "C for Everyone: Programming Fundamentals",
            "issuer": "University of California Santa Cruz",
            "date": "Oct 2025",
            "skills": ["C Programming"]
        },
        {
            "title": "Programming with Generative AI",
            "issuer": "IIT Guwahati",
            "date": "Sep 2025",
            "skills": ["Prompt Engineering", "GitHub Copilot"]
        },
        {
            "title": "The Complete Python Bootcamp From Zero to Hero",
            "issuer": "Pierian Training",
            "date": "Sep 2025",
            "skills": ["Python"]
        }
    ]

def main():
    print("Syncing data...")
    github_count = fetch_github_contributions()
    linkedin_posts = fetch_linkedin_posts()
    linkedin_certs = fetch_linkedin_certs()
    
    data = {
        "github": {
            "lastYear": github_count
        },
        "linkedin_posts": linkedin_posts,
        "certifications": linkedin_certs
    }
    
    with open("src/content/sync-data.json", "w") as f:
        json.dump(data, f, indent=2)
    
    print("Sync complete.")

if __name__ == "__main__":
    main()
