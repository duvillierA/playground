import React from 'react';

export const StatCard: React.FC<{ title: string; value: React.ReactNode }> = ({ title, value }) => {
  return (
    <div className="p-3 bg-gray-100 space-y-1 rounded">
      <div className="text-muted-foreground"> {title}</div>
      <strong className="block text-xl">{value}</strong>
    </div>
  )
}
