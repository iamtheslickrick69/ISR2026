"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 py-32">
        <div className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            View your business insights and analytics
          </p>
        </div>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Business Summary</CardTitle>
                <CardDescription>
                  Overview of your key business metrics and performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-6 border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
                    <p className="text-3xl font-bold">$124,500</p>
                    <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Active Customers</p>
                    <p className="text-3xl font-bold">1,247</p>
                    <p className="text-sm text-green-600 mt-1">+8.2% from last month</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Market Share</p>
                    <p className="text-3xl font-bold">24.3%</p>
                    <p className="text-sm text-green-600 mt-1">+2.1% from last month</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-heading text-xl font-medium mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { title: "New customer signup", time: "2 hours ago", status: "success" },
                      { title: "Competitor launched new feature", time: "5 hours ago", status: "warning" },
                      { title: "Monthly report generated", time: "1 day ago", status: "info" },
                      { title: "Price optimization completed", time: "2 days ago", status: "success" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'success' ? 'bg-green-100 text-green-800' :
                          activity.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Analysis</CardTitle>
                <CardDescription>
                  Track and analyze your competition in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Competitor A", marketShare: "28.5%", trend: "up", change: "+3.2%" },
                    { name: "Competitor B", marketShare: "22.1%", trend: "down", change: "-1.5%" },
                    { name: "Competitor C", marketShare: "18.7%", trend: "up", change: "+0.8%" },
                    { name: "Your Company", marketShare: "24.3%", trend: "up", change: "+2.1%", highlight: true },
                    { name: "Others", marketShare: "6.4%", trend: "down", change: "-0.3%" },
                  ].map((competitor, i) => (
                    <div
                      key={i}
                      className={`p-6 border rounded-lg ${
                        competitor.highlight
                          ? 'border-foreground bg-secondary/20'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-heading text-lg font-medium">
                          {competitor.name}
                          {competitor.highlight && (
                            <span className="ml-2 text-xs bg-foreground text-background px-2 py-1 rounded">
                              You
                            </span>
                          )}
                        </h3>
                        <span className={`text-sm font-medium ${
                          competitor.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {competitor.change}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full ${
                                competitor.highlight ? 'bg-foreground' : 'bg-muted-foreground/50'
                              }`}
                              style={{ width: competitor.marketShare }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-mono text-muted-foreground w-16 text-right">
                          {competitor.marketShare}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 border border-border rounded-lg bg-secondary/20">
                  <h3 className="font-heading text-lg font-medium mb-4">Competitive Insights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2" />
                      Competitor A launched a new pricing strategy last week
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2" />
                      You're gaining market share faster than any competitor
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2" />
                      Competitor B is experiencing customer churn issues
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Insights</CardTitle>
                <CardDescription>
                  Understand your customers and their behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                  <div className="p-6 border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Customer Satisfaction</p>
                    <p className="text-3xl font-bold">4.8/5.0</p>
                    <p className="text-sm text-green-600 mt-1">+0.3 from last quarter</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Retention Rate</p>
                    <p className="text-3xl font-bold">94.2%</p>
                    <p className="text-sm text-green-600 mt-1">+1.8% from last quarter</p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="font-heading text-lg font-medium">Customer Segments</h3>
                  {[
                    { segment: "Enterprise", count: 142, value: "$82,400", growth: "+15%" },
                    { segment: "Small Business", count: 487, value: "$28,900", growth: "+8%" },
                    { segment: "Startups", count: 618, value: "$13,200", growth: "+22%" },
                  ].map((seg, i) => (
                    <div key={i} className="p-6 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading text-base font-medium">{seg.segment}</h4>
                        <span className="text-sm font-medium text-green-600">{seg.growth}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Customers</p>
                          <p className="font-medium">{seg.count}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Monthly Value</p>
                          <p className="font-medium">{seg.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 border border-border rounded-lg bg-secondary/20">
                  <h3 className="font-heading text-lg font-medium mb-4">Top Customer Requests</h3>
                  <ol className="space-y-2 text-sm">
                    {[
                      "Advanced reporting features",
                      "Mobile app improvements",
                      "Integration with more platforms",
                      "Enhanced security options",
                      "Better onboarding experience",
                    ].map((request, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-muted-foreground">{i + 1}.</span>
                        <span className="text-muted-foreground">{request}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
