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
    <section>
      <h2>{ contentInfo.title }</h2>
      <iframe src={`https://editor.p5js.org/yesslkim/full/${params.pageId}`} width={540} height={540}></iframe>
      <p>{ contentInfo.para}</p>
    </section>
  );
}
 
export default ContentsView;
