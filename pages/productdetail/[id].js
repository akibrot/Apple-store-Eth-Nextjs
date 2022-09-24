import {useRouter} from 'next/router'
function ProductDetail() {
  const rou=useRouter()
  
  return <div>
    <h1>product details page uril test{rou.query.id}</h1>
  </div>;
}

export default ProductDetail;
