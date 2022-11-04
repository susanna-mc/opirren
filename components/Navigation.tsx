import { css } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';
import LocaleSwitcher from './locale-switcher';

const navbar = css`
  background-color: #2c8bac;
  padding: 10px;
  display: flexbox;
  color: #f6b91c;

  a {
    margin-left: 20px;
    color: #f6b91c;
    font-weight: bold;
  }
  a:hover {
    color: white;
    font-weight: bold;
  }
`;

const donateButton = css`
  background-color: #0326cb;
  border-radius: 15px;
  height: 35px;
  margin-left: 20px;
`;

export default function Navigation() {
  const router = useRouter();
  const { t } = useTranslation('');
  useEffect(() => {
    let dir = router.locale == 'fa' ? 'rtl' : 'ltr';
    let lang = router.locale == 'fa' ? 'fa' : 'en';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', lang);
  }, [router.locale]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar css={navbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <a
                className={`nav-link ${
                  router?.pathname === '/' ? 'active' : ''
                }`}
              >
                <img
                  src="/logowhitelongform.png"
                  alt="Operation Iranian Renaissance Logo"
                  height="40px"
                />
              </a>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              {/* ^^^ NEED TO FIX TO SHOW NAV ITEMS ON FULL SIZE WINDOW */}
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link href="/">
                      <a
                        className={`nav-link ${
                          router?.pathname === '/' ? 'active' : ''
                        }`}
                      >
                        {t('common.home')}
                      </a>
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/mission">
                    <a
                      className={`nav-link ${
                        router?.pathname === '/mission' ? 'active' : ''
                      }`}
                    >
                      {t('common.mission')}
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/projects">
                    <a
                      className={`nav-link ${
                        router?.pathname === '/projects' ? 'active' : ''
                      }`}
                    >
                      {t('common.projects')}
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/donate" css={donateButton}>
                    <a
                      className={`nav-link ${
                        router?.pathname === '/donate' ? 'active' : ''
                      }`}
                    >
                      {t('common.donate')}
                    </a>
                  </Link>
                </MenuItem>
                <LocaleSwitcher />{' '}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
