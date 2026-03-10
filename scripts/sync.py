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
    # Real LinkedIn scraping is complex and requires auth. 
    # This is a placeholder for the sync logic. 
    # In a real scenario, you'd use an API service or an authenticated scraper.
    return [
        {
            "title": "Excited to share my journey into AI/ML!",
            "date": datetime.date.today().strftime("%Y-%m-%d"),
            "url": LINKEDIN_URL,
            "excerpt": "Moving from competitive programming to building intelligent systems. Currently exploring Neural Networks..."
        }
    ]

def main():
    print("Syncing data...")
    github_count = fetch_github_contributions()
    linkedin_posts = fetch_linkedin_posts()
    
    data = {
        "github": {
            "lastYear": github_count
        },
        "linkedin_posts": linkedin_posts
    }
    
    with open("src/content/sync-data.json", "w") as f:
        json.dump(data, f, indent=2)
    
    print("Sync complete.")

if __name__ == "__main__":
    main()
