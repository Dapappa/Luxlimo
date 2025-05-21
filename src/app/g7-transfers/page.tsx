import { Metadata } from "next";
import G7Client from "./G7Client";

export const metadata: Metadata = {
  title: "G7 Summit Transfers | Lux Limousine Alberta",
  description:
    "Premium transportation services for G7 Summit events in Alberta. Secure, professional, and luxurious transport for delegates, staff, and attendees.",
};

export default function G7TransfersPage() {
  return <G7Client />;
}
