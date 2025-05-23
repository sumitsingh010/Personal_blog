import path from "path";
import fs from "fs"
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

// Function to read markdown content from public folder
async function getMarkdownContent(slug) {
    const filepath = path.join(process.cwd(), 'public', 'content', `${slug}.md`);
    try {
        const fileContent = await fs.promises.readFile(filepath, 'utf-8');
        return fileContent;
    } catch (error) {
        console.error('Error reading file:', error);
        return null;
    }
}

export default async function Page({ params }) {
    const param = await params; // Destructure slug directly
    const slug = param.slug
    const fileContent = await getMarkdownContent(slug);

    if (!fileContent) {
        return notFound();
    }

    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: data.title || 'Blog Post' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3000,
                }),
            ],
        });

    const htmlContent = (await processor.process(content)).toString();

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
            <img
                src={data.image}
                alt={data.title}
                className="w-full h-60 object-cover rounded-lg mb-4 md:h-80 lg:h-96"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                {data.author} | {new Date(data.date).toLocaleDateString()}
            </p>
            <p className="text-base border-l-4 border-gray-500 sm:text-lg md:text-xl mb-4">{data.description}</p>
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert"
            />
        </div>
    );
}
