/*Page.tsx files are the leaf of a route subtree, and is REQUIRED to make the route publicly accessible*/
import styles from "./page.module.scss";

export default function HomePage() {
  return <h1>Hello, Next.js! This is the App page!</h1>
}

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1 className={styles.h1}>Header World!</h1>
//       <h1 id="typeTest">Test!</h1>
//     </main>
//   );
// }
