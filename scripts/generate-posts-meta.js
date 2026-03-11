import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/posts');
const outputFile = path.join(process.cwd(), 'public/posts-meta.json');

function generateMetadata() {
    if (!fs.existsSync(postsDirectory)) {
        console.error(`Directory not found: ${postsDirectory}`);
        return;
    }

    const files = fs.readdirSync(postsDirectory);
    const posts = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const filePath = path.join(postsDirectory, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContent);

            return {
                id: path.basename(file, '.md'),
                title: data.title || path.basename(file, '.md'),
                date: data.date || '',
                excerpt: data.excerpt || '',
                file: `/posts/${file}`
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`Successfully generated metadata for ${posts.length} posts.`);
}

generateMetadata();
