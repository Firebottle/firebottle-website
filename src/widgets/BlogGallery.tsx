import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { PostItems } from '../utils/Posts';

export type IBlogGalleryProps = {
  posts: PostItems[];
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <h2 className="mb-3 p-2 border-b-fbstyle-400 border-solid border-b-2">
      Blog
    </h2>
    <ul className="flex flex-wrap">
      {props.posts.map((elt) => (
        <li key={elt.slug} className="p-2 lg:w-1/6 md:w-1/2 w-full">
          <div className="border-solid border-fbstyle-300 border-2 shadow">
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <a>
                <div className="blog-image">
                  <img src={elt.image} alt="image"></img>
                </div>
                <div className="text-left p-2 text-fbstyle-50">
                  <h2>{elt.title}</h2>
                  <span className="text-left text-sm text-fbstyle-100">
                    {format(new Date(elt.date), 'LLL d, yyyy')}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export { BlogGallery };