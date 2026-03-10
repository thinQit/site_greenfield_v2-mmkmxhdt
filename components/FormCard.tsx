'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function FormCard() {
  return (
    <Card className="rounded-xl p-6">
      <h3 className="text-xl font-bold">Request Information</h3>
      <div className="mt-4 grid gap-4">
        <div><Label>Name</Label><Input placeholder="Parent/Guardian Name" /></div>
        <div><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
        <div><Label>Interested Division</Label>
          <Select>
            <option>Lower School</option>
            <option>Middle School</option>
            <option>Upper School</option>
          </Select>
        </div>
        <div><Label>Message</Label><Textarea placeholder="Tell us about your student..." /></div>
        <p className="text-xs text-muted-foreground">By submitting, you agree to our privacy policy and communication terms.</p>
        <Button className="bg-[#3A56C5] hover:bg-[#3049ad]">Submit Inquiry</Button>
      </div>
    </Card>
  )
}
