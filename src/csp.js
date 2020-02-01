import contentSecurityPolicyBuilder from 'content-security-policy-builder';
import ip from 'ip';

// Read about csp: https://github.com/americanexpress/one-app#csp
export default contentSecurityPolicyBuilder({
  directives: {
    reportUri: `${process.env.ONE_CLIENT_REPORTING_URL}/report/security/csp-violation`,
    defaultSrc: [
      "'self'",
    ],
    scriptSrc: [
      "'self'",
      `${ip.address()}:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      `localhost:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      'https://cdn.jsdelivr.net/',
    ],
    imgSrc: [
      "'self'",
      'https://m.media-amazon.com',
      'https://uploads.codesandbox.io/',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.jsdelivr.net/',
    ],
    connectSrc: [
      "'self'",
      `${ip.address()}:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
      `localhost:${process.env.HTTP_ONE_APP_DEV_CDN_PORT || 3001}`,
    ],
  },
});
