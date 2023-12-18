import SidebarComponent from "./components/sidebar-component/SidebarComponent";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarComponent /> <div style={{ marginLeft: "25%" }}>{children}</div>
    </div>
  );
};

export default AdminLayout;
