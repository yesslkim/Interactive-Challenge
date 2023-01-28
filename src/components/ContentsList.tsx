import { Link } from 'wouter';
import { contentsDetail } from './Contents';

interface ContentsListProps {
  pageId: string,
  src: string,
  alt: string,
  isCardView: boolean
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

const ContentsList = ({pageId, src, alt, isCardView}: ContentsListProps) => {
  return (
    <li>
        <Link href={`/view/${pageId}`}>
          <a>
            <img src={src} alt={alt} />
          {!isCardView && <ContentsDesc pageId={ pageId } />}
          </a>
        </Link>
    </li>
  );
}
 
export default ContentsList;