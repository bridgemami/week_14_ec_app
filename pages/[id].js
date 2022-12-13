import Link from 'next/link';
//getAllIds is a function from lib/data.js
import { getAllIds, getData} from '../lib/data';
// import Layout from '../components/layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.module.css';


//create an instance of the getStaticPaths() to report next all possible dynamic urls
export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

//create an instance of the getStaticProps() to return data for one person
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 20
  };
}


// make a react component to display all details about type when a dynamic route matches, like id 1 or id 2
export default function Entry({ itemData }) {
  let basic = itemData[0].basic_information.split(',');
  console.log(`%c[id]: Basic information: %c${basic}`, 'color: yellow', "color: red');");
  console.log(` ${basic[1].replaceAll('_', ' ')}`)
  return (
    <>
    <h1 className='text-center mt-2'>Details</h1>
      <article className="container border border-secondary pb-3 ps-4">
        <section className="row">
          <h5 className="col-12 pt-2 ps-2">{(itemData[0].post_type.charAt(0).toUpperCase())+(itemData[0].post_type.slice(1))} ID: {itemData[0].ID}</h5>
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[0].replaceAll('_', '  ')}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[1].replaceAll('_', '  ')}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[2].replaceAll('_', '  ')}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[3].replaceAll('_', '  ')}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[4]}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[5].replaceAll('_', '  ')}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[6]}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[7].replaceAll('_', '  ')}} />
          <p className="card-text"  dangerouslySetInnerHTML={{__html: basic[8]}} />
          </section> 
          <button type="button" className="btn btn-secondary width_10 mt-3">
            <Link href='/'>
            <a>Back to Homepage</a>
            </Link>
            </button>
      </article>
    </>
  );
}