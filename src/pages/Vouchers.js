"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { VoucherCard } from "../components/Voucher/VoucherCard";
import { AddVoucherForm } from "../components/Voucher/VoucherForm";

// Sample data - replace with your actual data source
const sampleVouchers = [
  {
    id: "V-8212",
    title: "Summer Sale",
    type: "Selected Items",
    discount: "20%",
    audience: "Platinum",
    expiresAt: new Date("2024-12-31"),
  },
  {
    id: "V-1212",
    title: "New Year Special",
    type: "All Items",
    discount: "20%",
    audience: "All",
    expiresAt: new Date("2024-12-31"),
  },
  {
    id: "V-3412",
    title: "Black Friday Deal",
    type: "Selected Items",
    discount: "50%",
    audience: "Gold",
    expiresAt: new Date("2024-11-29"),
  },
  {
    id: "V-4512",
    title: "Cyber Monday Offer",
    type: "All Items",
    discount: "30%",
    audience: "All",
    expiresAt: new Date("2024-12-02"),
  },
  {
    id: "V-5612",
    title: "Holiday Special",
    type: "Selected Items",
    discount: "25%",
    audience: "Silver",
    expiresAt: new Date("2024-12-25"),
  },
  {
    id: "V-6712",
    title: "Spring Sale",
    type: "All Items",
    discount: "15%",
    audience: "All",
    expiresAt: new Date("2024-04-30"),
  },
  {
    id: "V-8212",
    title: "Summer Sale",
    type: "Selected Items",
    discount: "20%",
    audience: "Platinum",
    expiresAt: new Date("2024-12-31"),
  },
  {
    id: "V-1212",
    title: "New Year Special",
    type: "All Items",
    discount: "20%",
    audience: "All",
    expiresAt: new Date("2024-12-31"),
  },
  {
    id: "V-3412",
    title: "Black Friday Deal",
    type: "Selected Items",
    discount: "50%",
    audience: "Gold",
    expiresAt: new Date("2024-11-29"),
  },
];

export default function VouchersPage() {
  const [isAddingVoucher, setIsAddingVoucher] = useState(false);
  const [vouchers] = useState(sampleVouchers);

  return (
    <div>
      <div className="container mx-auto  pl-16">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Vouchers</h1>
            <p className="text-muted-foreground">
              Manage your store vouchers and promotional offers
            </p>
          </div>
          <Button
            onClick={() => setIsAddingVoucher(!isAddingVoucher)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            {isAddingVoucher ? "Cancel" : "Add Voucher"}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {isAddingVoucher ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AddVoucherForm />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {vouchers.map((voucher) => (
                <VoucherCard key={voucher.id} {...voucher} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
