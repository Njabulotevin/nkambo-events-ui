import type React from "react"
import { cn } from "@/lib/utils"

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <div className={cn("border border-gray-200 rounded-lg shadow-sm overflow-hidden", className)}>{children}</div>
}

export const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <header className={cn("p-4 bg-gray-100", className)}>{children}</header>
}

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h2 className={cn("text-lg font-medium", className)}>{children}</h2>
}

export const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn("p-4", className)}>{children}</div>
}

export const CardFooter = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <footer className={cn("p-4 bg-gray-100 border-t border-gray-200", className)}>{children}</footer>
}

export const Table = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <table className={cn("w-full text-left text-sm text-gray-500", className)}>{children}</table>
}

export const TableHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <thead className={cn("bg-gray-50", className)}>{children}</thead>
}

export const TableRow = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <tr className={cn(className)}>{children}</tr>
}

export const TableHead = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <th scope="col" className={cn("px-6 py-3 font-medium text-left text-gray-900 uppercase", className)}>
      {children}
    </th>
  )
}

export const TableBody = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <tbody className={cn(className)}>{children}</tbody>
}

export const TableCell = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <td className={cn("px-6 py-4 whitespace-nowrap", className)}>{children}</td>
}

