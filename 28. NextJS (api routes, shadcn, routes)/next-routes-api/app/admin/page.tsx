import { redirect } from "next/navigation";

export default function AdminRedirect() {
  // check user/admin login for redirecting condition
  redirect(`/admin/dashboard`);
}
