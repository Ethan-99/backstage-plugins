export interface Config {
  /**
   * Configuration options for the Jira Dashboard plugin
   */
  jiraDashboard:
    | {
        /**
         * The API token to authenticate towards Jira. It can be found by visiting Atlassians page at https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/
         * @visibility secret
         */
        token: string;

        /**
         * Optional headers to pass the HTTP requests
         */
        headers?: {
          /** @visibility secret */
          [key: string]: string | undefined;
        };

        /**
         * The base url for Jira in your company, including the API version. For instance: https://jira.se.your-company.com/rest/api/2/'
         */
        baseUrl: string;

        /**
         * Optional email suffix used for retrieving a specific Jira user in a company. For instance: @your-company.com. If not provided, the user entity profile email is used instead.
         */
        userEmailSuffix?: string;

        /**
         * Optional annotation prefix for retrieving a custom annotation. Defaut value is jira.com
         * @visibility frontend
         */
        annotationPrefix?: string;

        /**
         * Optional default filters for Jira queries
         */
        defaultFilters?: {
          name: string;
          query: string;
          shortName: string;
        }[];

        // Type helper
        instances?: never;
      }
    | {
        /**
         * Optional annotation prefix for retrieving a custom annotation. Defaut value is jira.com
         * @visibility frontend
         */
        annotationPrefix?: string;

        instances: {
          /**
           * Instance name. This is used in entity annotations to refer to the right instance. In entity annotations, this defaults to "default".
           */
          name: string;

          /**
           * The API token to authenticate towards Jira. It can be found by visiting Atlassians page at https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/
           * @visibility secret
           */
          token: string;

          /**
           * Optional headers to pass the HTTP requests
           */
          headers?: {
            /** @visibility secret */
            [key: string]: string | undefined;
          };

          /**
           * The base url for Jira in your company, including the API version. For instance: https://jira.se.your-company.com/rest/api/2/'
           */
          baseUrl: string;

          /**
           * Optional email suffix used for retrieving a specific Jira user in a company. For instance: @your-company.com. If not provided, the user entity profile email is used instead.
           */
          userEmailSuffix?: string;

          /**
           * Optional default filters for Jira queries
           */
          defaultFilters?: {
            name: string;
            query: string;
            shortName: string;
          }[];
        }[];
      };
}
