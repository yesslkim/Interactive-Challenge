import { useRoute } from 'wouter';
import { contentsDetail } from './Contents';

const ContentsView = () => {
  const [_, params] = useRoute('/view/:pageId');

  if (!params) {
    return (
      <div>현재 페이지 찾을 수 없음.</div>
    )
  }

  const [contentInfo] = contentsDetail.filter(content => content.pageId === params.pageId);

  return (
    <main className='main'>
      <h2 className='sub_title'>{ contentInfo.title }</h2>
      <iframe src={`https://editor.p5js.org/yesslkim/full/${params.pageId}`} className='preview'></iframe>
      <p className='sub_desc'>{ contentInfo.para}</p>
    </main>
  );
}
 
export default ContentsView;
