import {
    AddIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    RepeatIcon,
} from "@chakra-ui/icons";
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
//Component made for use when adding more features (login, sign up, watching last 3 operations done) to the app
const HamburguerMenu = (): JSX.Element => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} as={NavLink} to="/login">
                    Login
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                    New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                    Open Closed Tab
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default HamburguerMenu;
