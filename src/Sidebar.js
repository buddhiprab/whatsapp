import React from 'react';
import "./Sidebar.css"
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import SidebarChat from "./SidebarChat";

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src=""/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type=""/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
            </div>
        </div>
    );
}

export default Sidebar;