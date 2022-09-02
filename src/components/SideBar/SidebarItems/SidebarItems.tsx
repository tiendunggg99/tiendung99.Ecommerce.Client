import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function SidebarItems(props: any) {
  return (
    <div>
      <Divider />
      <List>
        {dataMenus.map(({ text, icon }) => (
          <ListItemComp text={text} open={props.open} icon={icon} key={text} />
        ))}
      </List>
      <Divider />
    </div>
  );
}

const dataMenus = [
  {
    text: "Home",
    icon: <InboxIcon />,
  },
  {
    text: "About",
    icon: <MailIcon />,
  },
];

function ListItemComp(props: any) {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: props.open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: props.open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {props.icon}
        </ListItemIcon>
        <ListItemText
          primary={props.text}
          sx={{ opacity: props.open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarItems;
