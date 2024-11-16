import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface VoucherCardProps {
  id: string;
  title: string;
  type: string;
  discount: string;
  audience: string;
  expiresAt?: Date;
}

export function VoucherCard({
  id,
  type,
  discount,
  audience,
  expiresAt,
}: VoucherCardProps) {
  const isExpired = expiresAt ? new Date() > expiresAt : false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Voucher: {id}</CardTitle>
            {isExpired && <Badge variant="destructive">Expired</Badge>}
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Type</span>
              <span className="font-medium">{type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Discount</span>
              <span className="font-medium">{discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Audience</span>
              <Badge variant="outline">{audience}</Badge>
            </div>
          </div>
          <div className="pt-4 text-center text-sm text-muted-foreground border-t">
            Deal Big ! Save Big !
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
