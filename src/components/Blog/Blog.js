import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost1 from './FeaturedPost1';
import FeaturedPost2 from './FeaturedPost2';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md.js';
import post2 from './blog-post.2.md.js';
import post3 from './blog-post.3.md.js';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Lorem fistrum por la gloria de mi madre',
  description:
    "Lorem fistrum jarl mamaar fistro qué dise usteer amatomaa. De la pradera jarl ese hombree me cago en tus muelas a gramenawer. Diodenoo qué dise usteer a peich diodeno por la gloria de mi madre no te digo trigo por no llamarte Rodrigor.",
  image: 'https://cataas.com/cat',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPost1 = 
  {
    title: 'Fistrum post1',
    date: 'Nov 12',
    description:
      'Me cago en tus muelas caballo blanco caballo negroorl condemor te voy a borrar el cerito.',
    image: 'https://cataas.com/cat',
    imageText: 'Image Text',
  };
  const featuredPost2 = 
  {
    title: 'Fistrum post2',
    date: 'Nov 11',
    description:
      'A gramenawer no puedor está la cosa muy malar jarl va usté muy cargadoo diodeno..',
    image: 'https://cataas.com/cat',
    imageText: 'Image Text',
  };

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Tiene musho peligro de la pradera a peich mamaar, qué dise usteer. Por la gloria de mi madre ese pedazo de tiene musho peligro tiene musho peligro ese que llega sexuarl mamaar.',
  archives: [
    { title: 'June 2020', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            <FeaturedPost1 post={featuredPost1}/>
            <FeaturedPost2 post={featuredPost2}/>
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>      
            <Main posts={posts}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
