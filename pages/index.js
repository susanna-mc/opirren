import { css } from '@emotion/react';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const projectSection = css`
  display: flex;

  flex-direction: row;
`;
const projectBoxes = css`
  width: 33%;
  flex-direction: column;
`;

const infoSection = css`
  display: flex;
  background-color: #2c8bac;
  flex-direction: row;
`;

const infoBoxes = css`
  margin: 20px
  flex-direction: column;
`;

export default function Home() {
  const { t } = useTranslation('');
  return (
    <div>
      <Head>
        <title>Operation Iranian Renaissance</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
          width="100%"
        >
          <Paper
            sx={{
              position: 'relative',

              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `/hero-image.jpeg`,
            }}
          >
            <img
              src="/hero-image.jpeg"
              alt="Two Iraian young women without hijabs standing back to back with arms outstretched, dangling navy blue hijabs from their hands with trees in the background "
              width="100%"
            />

            <Box
              sx={{
                position: 'absolute',

                backgroundColor: 'rgba(0,0,0,.3)',
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    gutterBottom
                  >
                    {t('index:title')}{' '}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <p> {t('index:recent_pubs')} </p>
        <div
        // css={projectSection}
        >
          {/* <div css={projectBoxes}> */}
          <Container css={projectSection} sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Link href="/projects">
                      <a>
                        <CardMedia
                          component="img"
                          image=" /protestmanualpreview.png"
                          alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {' '}
                            {t('index:protest_safely')}{' '}
                          </Typography>
                          <p> {t('index:protest_safely_subheading')}</p>
                        </CardContent>
                      </a>
                    </Link>
                    {/* </div> */}
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>

          <div css={projectBoxes}>
            <a>
              <h2>{t('index:social_media_assets')}</h2>
              <p>{t('index:social_media_assets_subheading')}</p>
            </a>
          </div>
          <div css={projectBoxes}>
            <a>
              <h2>{t('index:treat_wounds')} </h2>
              <p>{t('index:treat_wounds_subheading')}</p>
            </a>
          </div>
        </div>
        <br />
        <div css={infoSection}>
          <div>
            <div>
              <Link href="/mission">
                <a>
                  <img
                    src="/missionImage.png"
                    alt="Artwork by Istanbul based artist Hemad Javadzade.
                    Painting features an Iranian woman wearing a white shirt and blue pants wrestling a brown hairy demon that wears black boots. With one arm she pulls back the jaw of the demon, the other arm is raised and grasping scissors. One foot is stomping on the demon's baton, to keep the weapon out of his reach. Her black hair is not covered by a hijab and swirls around her body in a shape that resembles the borders of Iran. She looks angry and determined as the demon snarls with it's tongue out."
                    height="300px"
                    width="auto"
                  />
                  <h3>{t('index:mission')}</h3>
                  <p> {t('index:mission_subheading')}</p>
                </a>
              </Link>
            </div>
          </div>

          <div css={infoBoxes}>
            <div>
              <Link href="/projects">
                <a>
                  <img
                    src="/futureImage.png"
                    alt="PLACEHOLDER"
                    height="300px"
                    width="auto"
                  />
                  <h3>{t('index:future_projects')}</h3>
                  <p> {t('index:future_projects_subheading')}</p>
                </a>
              </Link>
            </div>
          </div>
          <div css={infoBoxes}>
            <div>
              <Link href="/mission#values">
                <a>
                  <img
                    src="/valuesImage.png"
                    alt="Four women chatting pleasantly at a table in Iran. Two are wearing conservative black chadors, two are without hijab."
                    height="300px"
                    width="auto"
                  />

                  <h3>{t('index:values')}</h3>
                  <p> {t('index:values_subheading')}</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  };
}
