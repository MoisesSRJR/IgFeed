import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "../Avatar/Index";

import { SidebarContainer } from './styles'

export function Sidebar () {
    return (
        <SidebarContainer data-testeid='sidebar'>
            <img
                className='cover'
                src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='Cover Image'
            />

            <div className='profile'>
                <Avatar
                    image='https://github.com/MoisesSRJR.png'
                />
                <strong>Moises Junior</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </SidebarContainer>
    )
}
