import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Avatar,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  DropdownMenu,
  Modal,
  ModalContent,
  ModalBody,
  Button,
} from "@heroui/react";
import photo from '../assets/Default.jpg'
import WorldnewsLogo from "@/utils/WorldnewsLogo";
import SearchIcon from "@/utils/SearchIcon";
import menuItems from "@/utils/menuItems";
import SearchBar from "./SearchBar";
import useNewNavbar from "@/hooks/useNewNavbar";


export default function NewNavbar() {
  const { isMenuOpen, setIsMenuOpen,
    isOpen, onClose, backdrop, handleOpen,
    GoogleLogout, signOut, nevigate, dispatch,
    setClosePorfile, opeingprofiletab, setTab
  } = useNewNavbar();


  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} className="bg-transparent overflow-hidden" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden bg-transparent " justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <WorldnewsLogo />
          <p className="font-bold text-inherit">Worldnews</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <WorldnewsLogo />
          <p className="font-bold text-inherit">Worldnews</p>
        </NavbarBrand>
        <NavbarItem >
          <div color="foreground" onClick={() => dispatch(setTab("entertainment"))} >
            Entertainment
          </div>
        </NavbarItem>
        <NavbarItem >
          <div color="foreground" onClick={() => dispatch(setTab("business"))} >
            Business
          </div>
        </NavbarItem>
        <NavbarItem>
          <div color="foreground" onClick={() => dispatch(setTab("sport"))}>
            Sport
          </div>
        </NavbarItem>
        <NavbarItem>
          <div color="foreground" onClick={() => dispatch(setTab("science"))}>
            Science
          </div>
        </NavbarItem>
        <NavbarItem>
          <div color="foreground" onClick={() => dispatch(setTab("technology"))}>
            Technology
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="ml-70 ">
        <Button
          className="capitalize"
          color="default"
          variant="flat"
          onPress={() => handleOpen("blur")}
        >
          <SearchIcon />
        </Button>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown placement="bottom-end" className="dark text-white bg-transparent border-neutral-600 border-1 z-50 shadow-2xl" onOpenChange={(e) => {
          opeingprofiletab(e);
        }} >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform "
              color="secondary"
              name="Jason Hughes"
              size="sm"
              onError={photo}
              src={(localStorage.getItem('picture')) ? localStorage.getItem('picture') : null}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 dark">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{(localStorage.getItem('email')) ? localStorage.getItem('email') : "email"}</p>
            </DropdownItem>

            <DropdownItem key="help_and_feedback" onClick={() => nevigate("/feedback")}>Help & Feedback</DropdownItem>
            <DropdownItem onClick={() => {
              GoogleLogout();
              signOut();
            }} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="text-cyan-400 " key={`${item}-${index}`}>
            <div
              className="w-full text-white"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              onClick={() => {
                if (item == "Help & Feedback") {
                  nevigate("/feedback")
                }
                else if (item == "Log Out") {
                  GoogleLogout();
                  signOut();
                }
              }}
            >
              {item}
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={() => {
        onClose()
        dispatch(setClosePorfile())
      }}>
        <ModalContent className="bg-transparent border-white border-1 text-white shadow-3xl">
          {(onClose) => (
            <>
              <ModalBody>
                <SearchBar />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Navbar>
  );
}
