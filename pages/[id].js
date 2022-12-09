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
    revalidate: 60
  };
}


// make a react component to display all details about a person when a dynamic route matches, like id 1 or id 2
export default function Entry({ itemData }) {
  let basic = itemData[0].basic_information.split(',');
  console.log(`%c[id]: Basic information: %c${basic}`, 'color: yellow', "color: red');");
  return (
    <>
    <h1 className='text-center mt-2'>Details</h1>
      <article className="container border border-secondary pb-3">
        <section className="row">
          <h5 className="col-12 pt-2">{itemData[0].post_title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.post_content}</h6>
          <p className='card-text'>{basic[2]}</p>
          <p className='card-text'>{basic[4]}</p>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData[0].post_content}} />
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