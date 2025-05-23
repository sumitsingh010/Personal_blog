import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import fs from "fs"
import path from "path";
import matter from 'gray-matter';

const dataPage = () => {
  // Path to your content folder inside public
  const contentDir = path.join(process.cwd(), 'public', 'content');
  
  // Read content directory
  const dirContent = fs.readdirSync(contentDir, "utf-8");

  // Parse the content of each markdown file
  const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return (
    <main className="py-2 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Blog Posts</h1>
        <div className="flex flex-wrap justify-center">
          {blogs.map((data) => (
            <div key={data.slug} className="max-w-xs mx-4 my-4 p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <Image src={data.image} alt={data.title} priority  className="w-full h-48 object-cover rounded-t-lg" width={500} height={200} />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4">{data.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(data.date).toLocaleDateString()}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{data.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{data.author}</span>
                <Button className="text-blue-600 dark:text-blue-400 hover:underline" variant="outline">
                  <Link href={`/blogpost/${data.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default dataPage;
