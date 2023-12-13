'use client';
import '~/styles/book.css';
import Link from 'next/link';

export function BookList() {
    return (
        <div className="book-wrap">
            <Link className="book-container" href="http://localhost:3000/posts/darkmode" rel="noreferrer noopener">
                <div className="book next">
                    <img alt="" src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" />
                </div>
            </Link>
            <Link className="book-container" href="" rel="noreferrer noopener">
                <div className="book">
                    <img alt="" src="https://scastiel.dev/book-covers/pull-requests-code-review.jpg" />
                </div>
            </Link>
            <Link className="book-container" href="" rel="noreferrer noopener">
                <div className="book">
                    <img alt="" src="https://scastiel.dev/book-covers/pull-requests-code-review.jpg" />
                </div>
            </Link>
        </div>
    );
}
