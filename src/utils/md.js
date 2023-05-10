import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPath = (folder) => {
  return path.join(process.cwd(), `/content/pages/${folder}`); // Get full path
};

export const getFileContent = (filename, folder) => {
  const POSTS_PATH = getPath(folder);
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8');
};

export const getAllCards = () => {

  // Get all the posts from posts folder
  const files = fs.readdirSync('content/pages/Cards');

  // Loop over each post to extract the frontmatter which we need
  const cards = files.map((file) => {
    // getting the slug here which we will need as a URL query parameter
    const slug = file.replace('.md', '');
    // Reading the contents of the file
    const filecontent = fs.readFileSync(`content/pages/Cards/${file}`, 'utf-8');
    const parsedContent = matter(filecontent);
    //The parsed content contains data and content we only need the data which is the frontmatter
    const { data } = parsedContent;
    return {
      data
    };
  });
  return cards;
};
