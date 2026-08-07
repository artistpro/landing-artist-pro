import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

export interface Post {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  status: 'published' | 'draft';
  publishedAt?: any;
  createdAt?: any;
  updatedAt?: any;
}

const COLLECTION = 'posts';

// Initial article: "El subsidiarte" by Ricardo Echeverry
const INITIAL_POSTS: Post[] = [
  {
    id: 'subsidiarte-post',
    title: 'El subsidiarte: cuando el apoyo deja de impulsar y empieza a limitar',
    slug: 'el-subsidiarte-cuando-el-apoyo-deja-de-impulsar-y-empieza-a-limitar',
    excerpt: 'Durante años he visto proyectos extraordinarios quedarse estancados y otros con menos talento pero con mentalidad empresarial sólida construir carreras sostenibles.',
    category: 'Industria',
    status: 'published',
    imageUrl: '/studio/5163497992533773427.jpg',
    publishedAt: { toDate: () => new Date() },
    createdAt: { toDate: () => new Date() },
    content: `
      <p><strong>Por Ricardo Echeverry</strong><br>Fundador de Artist Pro</p>

      <p>Durante años he trabajado con artistas independientes, bandas, productores y gestores culturales. He visto proyectos extraordinarios quedarse estancados y otros, con menos talento pero con una mentalidad empresarial sólida, construir carreras sostenibles.</p>

      <p>Con el tiempo he llegado a una conclusión que puede resultar incómoda para algunos: <strong>el mayor riesgo para un artista no siempre es la falta de recursos; muchas veces es desarrollar una dependencia permanente de los subsidios.</strong></p>

      <p>No estoy en contra de los estímulos públicos, las convocatorias o el capital semilla. Sería absurdo desconocer el papel que han tenido en el desarrollo de numerosos proyectos culturales en Colombia. Lo preocupante aparece cuando esos apoyos dejan de ser un impulso inicial y se convierten en el modelo de negocio del artista.</p>

      <h2>El problema no es el subsidio. Es la dependencia.</h2>

      <p>Imaginemos a una persona que se fractura una pierna. El médico le pone un yeso para inmovilizar el hueso mientras sana. El yeso es indispensable durante un tiempo, pero si la persona decidiera no quitárselo nunca, terminaría perdiendo masa muscular, fuerza y movilidad. El músculo que no trabaja se atrofia.</p>

      <p>Con los subsidios ocurre exactamente lo mismo.</p>

      <p>Los estímulos culturales son una herramienta temporal para acelerar un proyecto, reducir un riesgo o facilitar una etapa de crecimiento. Sin embargo, cuando un artista organiza toda su carrera alrededor de convocatorias, becas, incentivos y ayudas estatales, deja de desarrollar las capacidades que realmente sostienen una carrera artística: vender, negociar, crear comunidad, generar ingresos, construir marca y atraer clientes o público.</p>

      <p>Es una diferencia profunda entre recibir un impulso y vivir esperando el siguiente.</p>

      <h2>El nacimiento del "subsidiarte"</h2>

      <p>Podríamos llamar <strong>subsidiarte</strong> a ese fenómeno en el que un proyecto artístico deja de orientarse hacia el mercado y empieza a orientarse hacia las convocatorias.</p>

      <p>En lugar de preguntarse:</p>

      <ul>
        <li>¿Cómo consigo más seguidores?</li>
        <li>¿Cómo vendo más entradas?</li>
        <li>¿Cómo logro patrocinadores?</li>
        <li>¿Cómo genero ingresos recurrentes?</li>
        <li>¿Qué valor estoy creando para mi audiencia?</li>
      </ul>

      <p>La pregunta permanente pasa a ser:</p>

      <ul>
        <li>¿Qué convocatoria abrió?</li>
        <li>¿Qué beca puedo aplicar?</li>
        <li>¿Quién está financiando este año?</li>
        <li>¿Qué documento debo llenar?</li>
      </ul>

      <p>El centro del proyecto deja de ser el público y pasa a ser el formulario.</p>

      <p>Y eso cambia completamente la mentalidad del emprendedor.</p>

      <h2>El artista del siglo XXI debe ser un Artpreneur</h2>

      <p>El mercado musical cambió hace muchos años.</p>

      <p>Hoy un artista independiente no solamente compone canciones. También administra una marca, entiende métricas, construye comunidad, crea contenido, desarrolla alianzas, analiza datos, vende experiencias y aprende constantemente sobre marketing.</p>

      <p>Por eso cada vez cobra más fuerza el concepto de <strong>Artpreneur</strong>: la unión entre artista y emprendedor.</p>

      <p>Ser Artpreneur no significa convertir el arte en un simple negocio.</p>

      <p>Significa entender que el talento necesita una estructura empresarial para sobrevivir.</p>

      <p>La inspiración paga muy pocas cuentas si no está acompañada por una estrategia.</p>

      <h2>¿Qué ocurre cuando el Estado se convierte en el único cliente?</h2>

      <p>Existe otra consecuencia menos evidente.</p>

      <p>Cuando un sector artístico depende casi exclusivamente del presupuesto público, comienza a perder sensibilidad frente al mercado.</p>

      <p>Si el público compra o no compra entradas deja de ser determinante.</p>

      <p>Si la audiencia consume o no consume el contenido pierde importancia.</p>

      <p>Si existe una oportunidad comercial privada, muchas veces ni siquiera se explora.</p>

      <p>El incentivo deja de ser conquistar al público y pasa a ser cumplir los requisitos administrativos de una convocatoria.</p>

      <p>Eso reduce la innovación, la competencia y la capacidad empresarial del sector.</p>

      <h2>El caso de Rock al Parque</h2>

      <p>Rock al Parque representa uno de los festivales públicos más importantes de América Latina y ha contribuido significativamente a la circulación de artistas, la formación de públicos y el acceso gratuito a la música en vivo.</p>

      <p>Sin embargo, también abrió un debate que sigue siendo válido.</p>

      <p>Durante muchos años, algunos promotores privados señalaron que la existencia de un gran festival gratuito dificultaba que parte del público estuviera dispuesto a pagar por conciertos similares.</p>

      <p>Aunque el mercado colombiano ha evolucionado y hoy existe una industria de conciertos mucho más sólida que hace dos décadas, esa discusión dejó una enseñanza importante: <strong>cuando toda la oferta depende del subsidio, el desarrollo del mercado puede verse afectado.</strong></p>

      <p>La solución nunca ha sido eliminar los festivales públicos, sino encontrar un equilibrio donde la inversión estatal fortalezca la industria sin sustituirla.</p>

      <h2>El verdadero capital es aprender a generar ingresos</h2>

      <p>Un subsidio puede financiar un videoclip.</p>

      <p>Pero no garantiza que alguien quiera verlo.</p>

      <p>Puede financiar una gira.</p>

      <p>Pero no garantiza que exista una audiencia.</p>

      <p>Puede pagar una grabación.</p>

      <p>Pero no asegura que el proyecto sea sostenible dentro de cinco años.</p>

      <p>La verdadera independencia artística comienza cuando un músico desarrolla la capacidad de generar ingresos sin depender permanentemente de recursos externos.</p>

      <p>Esa habilidad permanece incluso cuando desaparecen las convocatorias.</p>

      <h2>Los subsidios deberían crear independencia, no dependencia</h2>

      <p>Quizá esa sea la pregunta más importante que deberíamos hacernos cada vez que se diseña una política pública para el sector cultural.</p>

      <p><strong>¿Este recurso está ayudando al artista a volverse más independiente o lo está haciendo más dependiente?</strong></p>

      <p>La respuesta cambia completamente la manera de entender los estímulos culturales.</p>

      <p>El mejor subsidio no es el que mantiene vivo un proyecto indefinidamente.</p>

      <p>Es aquel que le permite despegar para que nunca más tenga que depender de otro.</p>

      <h2>Desde Artist Pro creemos en artistas sostenibles</h2>

      <p>En Artist Pro creemos profundamente en el talento colombiano y en el enorme potencial de los artistas independientes.</p>

      <p>También creemos que la formación empresarial es tan importante como la formación musical.</p>

      <p>Por eso hablamos de marketing musical, de posicionamiento de marca, de producción audiovisual, de estrategia digital y de construcción de audiencias.</p>

      <p>Nuestro objetivo no es formar artistas expertos en llenar formularios.</p>

      <p>Queremos formar artistas capaces de construir empresas alrededor de su talento.</p>

      <p>Porque un artista que aprende a generar valor para su audiencia siempre tendrá más posibilidades de sostener su carrera que aquel que espera la siguiente convocatoria.</p>

      <hr>

      <p><strong>¿Y tú qué opinas?</strong></p>

      <p>¿Los subsidios culturales están fortaleciendo el emprendimiento artístico o, en algunos casos, están creando dependencia? Déjanos tu opinión y continuemos esta conversación. En Artist Pro creemos que el debate abierto también hace crecer a la industria musical.</p>
    `
  }
];

// Helper to get local storage posts
function getLocalPosts(): Post[] {
  try {
    const data = localStorage.getItem('artistpro_blog_posts');
    if (!data) {
      localStorage.setItem('artistpro_blog_posts', JSON.stringify(INITIAL_POSTS));
      return INITIAL_POSTS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_POSTS;
  }
}

function saveLocalPosts(posts: Post[]) {
  try {
    localStorage.setItem('artistpro_blog_posts', JSON.stringify(posts));
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
}

// ── Public: fetch published posts ─────────────────────────────
export async function getPublishedPosts(): Promise<Post[]> {
  try {
    const q = query(collection(db, COLLECTION), where('status', '==', 'published'));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const posts = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Post));
      return posts;
    }
  } catch (err) {
    console.warn('Firestore read failed or empty, falling back to local posts:', err);
  }
  const local = getLocalPosts();
  return local.filter((p) => p.status === 'published');
}

// ── Public: fetch single post by slug ────────────────────────
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const q = query(collection(db, COLLECTION), where('slug', '==', slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const d = snap.docs[0];
      return { id: d.id, ...d.data() } as Post;
    }
  } catch (err) {
    console.warn('Firestore slug read failed, falling back to local posts:', err);
  }
  const local = getLocalPosts();
  return local.find((p) => p.slug === slug) || null;
}

// ── Admin: fetch all posts ────────────────────────────────────
export async function getAllPosts(): Promise<Post[]> {
  try {
    const snap = await getDocs(collection(db, COLLECTION));
    if (!snap.empty) {
      return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Post));
    }
  } catch (err) {
    console.warn('Firestore getAllPosts failed, falling back to local posts:', err);
  }
  return getLocalPosts();
}

// ── Admin: fetch single post by ID ───────────────────────────
export async function getPostById(id: string): Promise<Post | null> {
  try {
    const ref = doc(db, COLLECTION, id);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() } as Post;
    }
  } catch (err) {
    console.warn('Firestore getPostById failed:', err);
  }
  const local = getLocalPosts();
  return local.find((p) => p.id === id) || null;
}

// ── Admin: create post ───────────────────────────────────────
export async function createPost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const newPostId = 'post-' + Date.now();
  const fullPost: Post = {
    ...post,
    id: newPostId,
    publishedAt: { toDate: () => new Date() },
    createdAt: { toDate: () => new Date() },
    updatedAt: { toDate: () => new Date() },
  };

  // Try Firestore
  try {
    const ref = await addDoc(collection(db, COLLECTION), {
      ...post,
      publishedAt: post.status === 'published' ? serverTimestamp() : null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    fullPost.id = ref.id;
  } catch (err) {
    console.warn('Firestore write blocked/failed. Saving locally so post is live:', err);
  }

  // Always save to local storage as fallback
  const local = getLocalPosts();
  local.unshift(fullPost);
  saveLocalPosts(local);

  return fullPost.id;
}

// ── Admin: update post ───────────────────────────────────────
export async function updatePost(id: string, data: Partial<Post>): Promise<void> {
  try {
    const ref = doc(db, COLLECTION, id);
    await updateDoc(ref, {
      ...data,
      updatedAt: serverTimestamp(),
      ...(data.status === 'published' ? { publishedAt: serverTimestamp() } : {}),
    });
  } catch (err) {
    console.warn('Firestore update failed, updating local copy:', err);
  }

  const local = getLocalPosts();
  const idx = local.findIndex((p) => p.id === id);
  if (idx !== -1) {
    local[idx] = { ...local[idx], ...data };
    saveLocalPosts(local);
  }
}

// ── Admin: delete post ───────────────────────────────────────
export async function deletePost(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, COLLECTION, id));
  } catch (err) {
    console.warn('Firestore delete failed, removing local copy:', err);
  }

  const local = getLocalPosts();
  const filtered = local.filter((p) => p.id !== id);
  saveLocalPosts(filtered);
}

// ── Util: generate slug from title ───────────────────────────
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
