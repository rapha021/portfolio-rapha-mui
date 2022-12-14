import {
  AppBar,
  Badge,
  Divider,
  Grid,
  IconButton,
  Link,
  LinkProps,
  LinkTypeMap,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import CottageIcon from "@mui/icons-material/Cottage"
import InfoIcon from "@mui/icons-material/Info"
import EmailIcon from "@mui/icons-material/Email"
import InventoryIcon from "@mui/icons-material/Inventory"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

import { ReactNode, useState } from "react"

import { useLocation, useNavigate } from "react-router-dom"
import { useThemeContext } from "../../contexts/darkmode.context"

import { Link as LinkRouter } from "react-router-dom"
import { OverridableComponent } from "@mui/material/OverridableComponent"

interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface ITabs {
  label: string
  icon: JSX.Element
  value?: string
  component: any
  to?: string
  disabled?: boolean
  href?: string
  target?: string
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation().pathname
  const navigate = useNavigate()

  const desktop = useMediaQuery("(min-width:1200px)")

  const { dark } = useThemeContext()

  const tabs: ITabs[] = [
    {
      label: "Home",
      icon: <CottageIcon />,
      value: "/",
      component: LinkRouter,
      to: "/",
      disabled: false,
    },
    {
      label: "Sobre",
      icon: <InfoIcon />,
      value: "/about",
      component: LinkRouter,
      to: "/about",
      disabled: false,
    },
    {
      label: "Contato",
      icon: (
        <Badge badgeContent="!" color="warning">
          <EmailIcon />
        </Badge>
      ),
      value: "/contact",
      component: LinkRouter,
      to: "/contact",
      disabled: false,
    },
    {
      label: "Projetos",
      icon: <InventoryIcon />,
      value: "/projects",
      component: LinkRouter,
      to: "/projects",
    },
    {
      label: "GitHub",
      icon: <GitHubIcon />,
      component: Link,
      href: "https://github.com/rapha021/",
      target: "_blank",
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      component: Link,
      href: "https://linkedin.com/in/raphaelgloria/",
      target: "_blank",
    },
  ]

  return (
    <>
      {desktop ? (
        <Grid
          container
          sx={{
            backgroundColor: dark ? "#333" : "#fff",
            width: "fit-content",
          }}
        >
          <Grid item>
            <Tabs value={location} variant="scrollable" orientation="vertical">
              {tabs.map((tab) => (
                <Tab
                  label={tab.label}
                  icon={tab.icon}
                  value={tab.value}
                  component={tab.component}
                  to={tab.to}
                  disabled={tab.disabled}
                  href={tab.href}
                  target={tab.target}
                  key={tab.label}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      ) : (
        <>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            sx={{
              width: "300px",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                width: "300px",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <ListItemButton
                onClick={() => {
                  navigate("/")
                  setOpen(false)
                }}
                selected={location === "/"}
              >
                <ListItemIcon>
                  <CottageIcon />
                </ListItemIcon>
                <ListItemText primary="P??gina inicial" secondary="Home" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/about")
                  setOpen(false)
                }}
                selected={location === "/about"}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Sobre Mim" secondary="About me" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/contact")
                  setOpen(false)
                }}
                selected={location === "/contact"}
              >
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Contato" secondary="Contact" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/projects")
                  setOpen(false)
                }}
                selected={location === "/projects"}
              >
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Projeto" secondary="Project" />
              </ListItemButton>

              <Divider />

              <Link
                href="https://github.com/rapha021"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noreferrer"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Github" secondary="External page" />
                </ListItemButton>
              </Link>

              <Link
                href="https://www.linkedin.com/in/raphaelgloria/"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noreferrer"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn" secondary="External page" />
                </ListItemButton>
              </Link>
            </ListItem>
          </SwipeableDrawer>

          <AppBar
            position="sticky"
            sx={{ height: "70px", justifyContent: "center" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </>
      )}
    </>
  )
}

export default Header
