import Head from 'next/head';
import Link from 'next/link';
// import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
// import PersonSWChar from "../components/list"
import '../styles/Home.module.css'
import CharacterList from "../components/list"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export async function getStaticProps() {
  const allData = await getSortedList();
  // const notStarWars= await getSortedList(false);
  return {
    props: {
      //  allData: allData,
      allData
    },
    revalidate: 60
  }
}
export default function Home({ allData }) {
  return (
      <>
            <h1 className="text-center mb-4">The List</h1>
          <div>
         {allData.map(({id, title, type} ) => 
         <section key={id} className='container mb-4'>
         <ul className='row'>
         <li>The {type}&apos;s id: <strong>{id}</strong></li>
         <li>The {type}&apos;s name: <strong>{title}</strong></li>
         <li className={type}><strong>Category: {(type.charAt(0).toUpperCase())+(type.slice(1))}</strong></li>
         {/* <li>The post is <em>{content.rendered}</em></li>
         <li>Date created: <strong>{date}</strong></li>
         <li>Last modified: {modify}</li> */}
         </ul>
         <button type="button" className="btn btn-secondary width_10 ms-4">
          <Link href={`/${id}`} key={id}>
            <a>More Info</a>
            </Link>
            </button>
            <hr />
         </section>
  )
         }
        </div>    
      </>
  );
}
// {sw.map( ({id, author}) => <CharacterLink key={"pl"+id} tag={tag} id={id} author={author} /> )}
