import { Link } from 'wouter';

interface ContentsListProps {
  [key: string] : string
}

const ContentsList = ({pageId, src, alt}: ContentsListProps) => {
  return (
    <li>
      <div>
        <Link href={`/view/${pageId}`}>
          <img src={src} alt={alt} />
        </Link>
      </div>
    </li>
  );
}
 
export default ContentsList;