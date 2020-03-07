local incidents = [
  // Generates database is down incidents
  {
    difficulty: '3',
  } +
  { scenario: "You've received an alert that your " + database + ' server is killed...' }
  for database in [
    'Redis',
    'MySQL',
    'MongoDB',
  ]
] + [
  // Generates DC is down incidents
  {
    difficulty: '4',
  } +
  { scenario: "You've received alerts that your DC " + dc + ' has a power outage...' }
  for dc in [
    'eu-west-1',
    'eu-north-1',
    'us-east-2',
  ]
] + [
  // Static incidents
  {
    difficulty: '4',
    scenario: 'You received alerts that your MySQL master does not accept writes...',
  },
  {
    difficulty: '2',
    scenario: "You've received alerts that your load balancer is down...",
  },
  {
    difficulty: '5',
    scenario: "You've received an alert that your Blob storage system is unable to store objects...",
  },
  {
    difficulty: '3',
    scenario: "You've received an alert that your Redis server is killed...",
  },
  {
    difficulty: '2',
    scenario: "You've received alerts of high HTTP 5xx error rate...",
  },
  {
    difficulty: '1',
    scenario: "You've received alerts that there is high query latency in the RPC servers...",
  },
  {
    difficulty: '4',
    scenario: "You've received an alert that an LDAP client cannot query LDAP server",
  },
];

# Generates incident title and id
[incidents[i] { id: '%d' % [i + 1], title: 'Incident %d' % [i + 1] } for i in std.range(0, std.length(incidents) - 1)]
