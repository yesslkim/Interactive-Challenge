import { Link } from 'wouter';
import { contentsDetail } from '@components/Contents';

interface ContentsListProps {
  pageId: string,
  src: string,
  alt: string,
}

const ContentsDesc = ({pageId} : { pageId: string }) => {
  const [contentsInfo] = contentsDetail.filter(contentDetail => contentDetail.pageId === pageId);
  return (
    <div>
      <h2>{contentsInfo.title}</h2>
      <p>{contentsInfo.para}</p>
    </div>
  )
}

const ContentsList = ({pageId, src, alt}: ContentsListProps) => {
  return (
    <li>
        <Link href={`/view/${pageId}`}>
          <a>
            <img src={src} alt={alt} />
            <ContentsDesc pageId={ pageId } />
          </a>
        </Link>
    </li>
  );
}
 
export default ContentsList;