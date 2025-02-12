/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  beaverbuilder: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'beaver-builder/introduction/index',
      },
      items: [
        "beaver-builder/introduction/faq",
        "beaver-builder/introduction/dev-preview",
        "beaver-builder/introduction/about-release",
        "beaver-builder/introduction/releases-versioning",
        "beaver-builder/introduction/accessibility",
        "beaver-builder/introduction/translations",
        "beaver-builder/introduction/gdpr",
        "beaver-builder/introduction/support-policy",
      ],
    },
    {
      type: 'category',
      label: 'Account',
      link: {
        type: 'doc',
        id: 'beaver-builder/account/index',
      },
      items: [
        {
          type: 'category',
          label: 'License',
          link: {
            type: 'doc',
            id: "beaver-builder/account/license/index",
          },
          items: [
            "beaver-builder/account/license/renew",
            "beaver-builder/account/license/downgrade",
            "beaver-builder/account/license/upgrade",
            "beaver-builder/account/license/paypal-agreement",
            "beaver-builder/account/license/transfer",
            "beaver-builder/account/license/suspension",
          ],
        },
        "beaver-builder/account/billing-info",
        "beaver-builder/account/domain-manager",
        "beaver-builder/account/update-email-password",
        "beaver-builder/account/request-invoice",
        "beaver-builder/account/suggest-new-features",
        "beaver-builder/account/affiliate-program",
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/beaver-builder/getting-started/',
      },
      items: [
        "beaver-builder/getting-started/what-can-i-do-with-beaver-builder",
        "beaver-builder/getting-started/system-requirements",
        "beaver-builder/getting-started/install",
        {
          type: 'category',
          label: 'BB Editor Basics',
          link: {
            type: 'generated-index',
            title: 'BB Editor Basics',
            slug: '/beaver-builder/getting-started/bb-editor-basics/',
          },
          items: [
            "beaver-builder/getting-started/bb-editor-basics/launch-builder",
            "beaver-builder/getting-started/bb-editor-basics/user-interface",
            "beaver-builder/getting-started/bb-editor-basics/tools-menu",
            "beaver-builder/getting-started/bb-editor-basics/outline-panel",
            "beaver-builder/getting-started/bb-editor-basics/global-settings",
            "beaver-builder/getting-started/bb-editor-basics/show-or-hide-the-wordpress-page-title",
            "beaver-builder/getting-started/bb-editor-basics/alignment",
            "beaver-builder/getting-started/bb-editor-basics/inline-editing",
            "beaver-builder/getting-started/bb-editor-basics/undo-redo",
            "beaver-builder/getting-started/bb-editor-basics/copy-and-paste-modules-or-module-styles",
            "beaver-builder/getting-started/bb-editor-basics/duplicate-your-beaver-builder-layout-to-another-page",
            "beaver-builder/getting-started/bb-editor-basics/delete-a-module-or-column",
            "beaver-builder/getting-started/bb-editor-basics/save-publish-discard",
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Layouts',
      link: {
        type: 'generated-index',
        title: 'Layouts',
        slug: '/beaver-builder/layouts/',
      },
      items: [
        {
          type: 'category',
          label: 'The Advanced Tab',
          link: {
            type: "doc",
            id: "beaver-builder/layouts/advanced-tab/index",
          },
          items: [
            "beaver-builder/layouts/advanced-tab/spacing",
            "beaver-builder/layouts/advanced-tab/visibility",
            "beaver-builder/layouts/advanced-tab/animation",
            "beaver-builder/layouts/advanced-tab/html-element",
            "beaver-builder/layouts/advanced-tab/copy-paste",
            "beaver-builder/layouts/advanced-tab/css-js",
          ],
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            "beaver-builder/layouts/templates/layout-templates-overview",
            "beaver-builder/layouts/templates/add-a-layout-template-to-your-page",
            "beaver-builder/layouts/templates/create-and-save-a-custom-layout-template",
            "beaver-builder/layouts/templates/manage-saved-layout-templates",
            "beaver-builder/layouts/templates/edit-or-delete-saved-layout-templates",
            "beaver-builder/layouts/templates/rename-title-or-slug-saved-template-row-column-module",
            "beaver-builder/layouts/templates/categorize-and-add-thumbnails-to-saved-templates-list",
            "beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse",
            "beaver-builder/layouts/templates/insert-a-saved-row-column-module-into-your-layout",
            "beaver-builder/layouts/templates/manage-saved-rows-columns-modules",
            "beaver-builder/layouts/templates/edit-a-saved-row-column-or-module",
            "beaver-builder/layouts/templates/convert-a-saved-row-column-module-to-global",
            "beaver-builder/layouts/templates/convert-a-global-row-column-module-to-standard",
            "beaver-builder/layouts/templates/add-an-image-to-an-item-on-the-saved-tab",
            "beaver-builder/layouts/templates/delete-a-saved-row-column-module",
            "beaver-builder/layouts/templates/export-import-content",
          ]
        },
        {
          type: 'category',
          label: 'Rows',
          items: [
            "beaver-builder/layouts/rows/add-prebuilt-rows-to-your-content",
            "beaver-builder/layouts/rows/work-with-rows",
            "beaver-builder/layouts/rows/full-width-and-fixed-width",
            "beaver-builder/layouts/rows/set-width-for-rows-and-content",
            "beaver-builder/layouts/rows/set-global-site-wide-default-row-widths",
            "beaver-builder/layouts/rows/full-width-rows-on-third-party-themes",
            "beaver-builder/layouts/rows/customize-the-row-height",
            {
              type: 'category',
              label: 'Row effects',
              items: [
                "beaver-builder/layouts/rows/row-effects/row-shape-overlays",
                "beaver-builder/layouts/rows/row-effects/video-backgrounds-in-rows",
                "beaver-builder/layouts/rows/row-effects/ideas-for-using-background-colors-and-effects",
                "beaver-builder/layouts/rows/row-effects/parallax-row-backgrounds",
                "beaver-builder/layouts/rows/row-effects/create-a-ken-burns-effect-in-a-row-background",
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Columns',
          items: [
            "beaver-builder/layouts/columns/column-layouts-overview",
            "beaver-builder/layouts/columns/tips-for-working-with-columns",
            "beaver-builder/layouts/columns/insert-columns",
            "beaver-builder/layouts/columns/edit-a-column",
            "beaver-builder/layouts/columns/resize-or-reset-column-width",
            "beaver-builder/layouts/columns/move-a-column",
            "beaver-builder/layouts/columns/duplicate-a-column",
            "beaver-builder/layouts/columns/stacking",
          ]
        },
        {
          type: 'category',
          label: 'Modules',
          link: {
            type: 'doc',
            id: 'beaver-builder/layouts/modules/index',
          },
          items: [
            {
              type: 'category',
              label: 'Accordion',
              link: {
                type: 'doc',
                id: 'beaver-builder/layouts/modules/accordion/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Settings',
                  link: {
                    type: 'doc',
                    id: 'beaver-builder/layouts/modules/accordion/settings/index',
                  },
                  items: [
                    'beaver-builder/layouts/modules/accordion/settings/items',
                    'beaver-builder/layouts/modules/accordion/settings/style',
                  ],
                },
                'beaver-builder/layouts/modules/accordion/link-specific-item',
                'beaver-builder/layouts/modules/accordion/css-customization',
              ]
            },
            "beaver-builder/layouts/modules/audio",
            "beaver-builder/layouts/modules/bigcommerce-products",
            {
              type: 'category',
              label: 'Button',
              items: [
                "beaver-builder/layouts/modules/button/button",
                "beaver-builder/layouts/modules/button/make-a-button-transparent",
              ]
            },
            "beaver-builder/layouts/modules/button-group",
            "beaver-builder/layouts/modules/callout-and-call-to-action",
            {
              type: 'category',
              label: 'Contact Form',
              items: [
                "beaver-builder/layouts/modules/contact-form/contact-form",
                "beaver-builder/layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form",
              ]
            },
            "beaver-builder/layouts/modules/content-slider",
            "beaver-builder/layouts/modules/countdown",
            {
              type: 'category',
              label: 'Gallery',
              items: [
                "beaver-builder/layouts/modules/gallery/gallery",
                "beaver-builder/layouts/modules/gallery/open-a-gallery-lightbox-on-button-click",
              ]
            },
            "beaver-builder/layouts/modules/heading",
            "beaver-builder/layouts/modules/html",
            "beaver-builder/layouts/modules/icon-and-icon-group",
            "beaver-builder/layouts/modules/list",
            "beaver-builder/layouts/modules/login-form",
            "beaver-builder/layouts/modules/map",
            {
              type: 'category',
              label: 'Menu',
              items: [
                "beaver-builder/layouts/modules/menu/menu",
                "beaver-builder/layouts/modules/menu/add-a-menu-item-that-links-to-a-page-section",
              ]
            },
            "beaver-builder/layouts/modules/number-counter",
            {
              type: 'category',
              label: 'Photo',
              items: [
                "beaver-builder/layouts/modules/photo/photo",
                "beaver-builder/layouts/modules/photo/display-full-captions-under-photos",
                "beaver-builder/layouts/modules/photo/add-hover-effects-to-the-photo-module",
              ]
            },
            {
              type: 'category',
              label: 'Posts',
              items: [
                "beaver-builder/layouts/modules/posts/posts",
                "beaver-builder/layouts/modules/posts/posts-carousel",
                "beaver-builder/layouts/modules/posts/posts-slider",
                "beaver-builder/layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples",
                "beaver-builder/layouts/modules/posts/increase-space-between-images-in-posts-module-gallery",
              ]
            },
            "beaver-builder/layouts/modules/pricing-table",
            "beaver-builder/layouts/modules/reusable-blocks",
            {
              type: 'category',
              label: 'Search',
              items: [
                "beaver-builder/layouts/modules/search/search",
                "beaver-builder/layouts/modules/search/limit-post-types-search-module",
              ]
            },
            "beaver-builder/layouts/modules/separator",
            "beaver-builder/layouts/modules/sidebar",
            "beaver-builder/layouts/modules/slideshow",
            "beaver-builder/layouts/modules/social-buttons",
            {
              type: 'category',
              label: 'Subscribe Form',
              items: [
                "beaver-builder/layouts/modules/subscribe-form/subscribe-form",
                "beaver-builder/layouts/modules/subscribe-form/configure-subscribe-form-module-for-mailchimp-double-opt-in",
                "beaver-builder/layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form",
              ]
            },
            {
              type: 'category',
              label: 'Tabs',
              link: {
                type: 'doc',
                id: 'beaver-builder/layouts/modules/tabs/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Settings',
                  link: {
                    type: 'doc',
                    id: 'beaver-builder/layouts/modules/tabs/settings/index',
                  },
                  items: [
                    'beaver-builder/layouts/modules/tabs/settings/items',
                    'beaver-builder/layouts/modules/tabs/settings/style',
                  ],
                },
                "beaver-builder/layouts/modules/tabs/link-specific-item",
              ]
            },
            "beaver-builder/layouts/modules/testimonials",
            "beaver-builder/layouts/modules/text",
            {
              type: 'category',
              label: 'Video',
              items: [
                "beaver-builder/layouts/modules/video/video",
                "beaver-builder/layouts/modules/video/open-a-video-in-a-lightbox",
              ]
            },
            "beaver-builder/layouts/modules/woocommerce",
            "beaver-builder/layouts/modules/widgets",
          ]
        },
        {
          type: 'category',
          label: 'Responsive Design',
          link: {
            type: "doc",
            id: "beaver-builder/layouts/responsive-design/index",
          },
          items: [
            "beaver-builder/layouts/responsive-design/editor",
            "beaver-builder/layouts/responsive-design/breakpoints",
            "beaver-builder/layouts/responsive-design/toggle",
            "beaver-builder/layouts/responsive-design/disable",
            "beaver-builder/layouts/responsive-design/responsive-columns",
          ]
        },
        {
          type: 'category',
          label: 'Post Layouts',
          items: [
            "beaver-builder/layouts/post-layouts/how-beaver-builder-works-with-blogs-and-custom-post-types-start-here",
            "beaver-builder/layouts/post-layouts/basics-how-wordpress-handles-blog-posts-and-archives",
            "beaver-builder/layouts/post-layouts/wordpress-archive-types",
            "beaver-builder/layouts/post-layouts/generated-wordpress-archives-versus-beaver-builder-layouts",
            "beaver-builder/layouts/post-layouts/use-beaver-builder-to-lay-out-post-content",
            "beaver-builder/layouts/post-layouts/add-rows-and-modules-to-index-archive-and-post-pages",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Styles',
      link: {
        type: 'generated-index',
        title: 'Styles',
        slug: '/beaver-builder/styles/',
      },
      items: [
        {
          type: 'category',
          label: 'Colors',
          items: [
            "beaver-builder/styles/colors/color-picker",
            "beaver-builder/styles/colors/add-a-color-palette-to-the-beaver-builder-editor",
          ]
        },
        {
          type: 'category',
          label: 'Typography',
          items: [
            "beaver-builder/styles/typography/typography",
            "beaver-builder/styles/typography/add-latin-extended-capabilities-for-a-google-font",
          ]
        },
        {
          type: 'category',
          label: 'Effects',
          items: [
            "beaver-builder/styles/effects/animations",
            "beaver-builder/styles/effects/color-gradients-for-row-and-column-backgrounds-and-overlays",
            "beaver-builder/styles/effects/css-gradients",
            "beaver-builder/styles/effects/borders",
            "beaver-builder/styles/effects/radius-shadow",
            "beaver-builder/styles/effects/rounded-corners-on-columns-and-photos",
          ]
        },
        {
          type: 'category',
          label: 'Icons',
          items: [
            "beaver-builder/styles/icons/enable-disable-or-delete-icon-sets",
            "beaver-builder/styles/icons/enable-font-awesome-pro-icon-sets",
            "beaver-builder/styles/icons/font-awesome-pro-duotone-icons",
            "beaver-builder/styles/icons/add-an-icon-to-a-menu-item",
            "beaver-builder/styles/icons/create-and-import-a-custom-icon-set",
          ]
        },
        "beaver-builder/styles/custom-code",
      ]
    },
    {
      type: 'category',
      label: 'Advanced Builder Techniques',
      link: {
        type: 'generated-index',
        title: 'Advanced Builder Techniques',
        slug: '/beaver-builder/advanced-builder-techniques/',
      },
      items: [
        "beaver-builder/advanced-builder-techniques/css-length-height-units",
        "beaver-builder/advanced-builder-techniques/add-a-css-id-or-class-name-to-a-module",
        "beaver-builder/advanced-builder-techniques/add-a-pdf-file-to-your-layout",
        "beaver-builder/advanced-builder-techniques/smooth-scrolling-links",
        "beaver-builder/advanced-builder-techniques/smooth-scrolling-tweaks-with-code",
        "beaver-builder/advanced-builder-techniques/restore-a-previous-version",
        "beaver-builder/advanced-builder-techniques/keyboard-shortcuts",
        "beaver-builder/advanced-builder-techniques/display-only-custom-layout-templates-in-beaver-builder",
        "beaver-builder/advanced-builder-techniques/disable-inline-editing",
        "beaver-builder/advanced-builder-techniques/disable-columns-in-columns",
        {
          type: 'category',
          label: 'Shortcodes',
          items: [
            "beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts",
            "beaver-builder/advanced-builder-techniques/shortcodes/shortcode-reference",
            "beaver-builder/advanced-builder-techniques/shortcodes/get-the-slug-or-id-for-a-shortcode",
            "beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-tools-menu-css-or-js",
            "beaver-builder/advanced-builder-techniques/shortcodes/shortcode-performance",
            "beaver-builder/advanced-builder-techniques/shortcodes/shortcodes-dont-display-for-logged-out-users-bbpress",
            "beaver-builder/advanced-builder-techniques/shortcodes/put-thrive-leads-shortcode-into-a-button-module",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Management/Migration',
      link: {
        type: 'generated-index',
        title: 'Management & Migration',
        slug: '/beaver-builder/management-migration/',
      },
      items: [
        "beaver-builder/management-migration/settings-overview",
        "beaver-builder/management-migration/advanced-settings",
        "beaver-builder/management-migration/import-export-settings",
        "beaver-builder/management-migration/limit-page-post-lists-to-bb-layouts",
        "beaver-builder/management-migration/control-which-post-types-can-use-beaver-builder",
        "beaver-builder/management-migration/control-user-access-by-role",
        "beaver-builder/management-migration/disable-wordpress-comments",
        "beaver-builder/management-migration/add-custom-image-sizes",
        "beaver-builder/management-migration/change-wordpress-screen-options",
        "beaver-builder/management-migration/configure-the-beaver-builder-admin-panel-display-options",
        "beaver-builder/management-migration/convert-content-between-wordpress-5-and-beaver-builder",
        "beaver-builder/management-migration/anonymous-usage-data-sent-to-beaver-builder",
        "beaver-builder/management-migration/disable-specific-modules-sitewide",
        "beaver-builder/management-migration/enable-prerelease-updates",
        "beaver-builder/management-migration/manually-migrate-a-beaver-builder-site",
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        slug: '/beaver-builder/troubleshooting/',
      },
      items: [
        {
          type: 'category',
          label: 'Debugging ',
          items: [
            "beaver-builder/troubleshooting/debugging/cache-clearing-tool",
            "beaver-builder/troubleshooting/debugging/issue-fixer-clear-the-cache",
            "beaver-builder/troubleshooting/debugging/safe-mode",
            "beaver-builder/troubleshooting/debugging/known-beaver-builder-incompatibilities",
            "beaver-builder/troubleshooting/debugging/plugin-conflicts",
            "beaver-builder/troubleshooting/debugging/theme-conflict",
            "beaver-builder/troubleshooting/debugging/enable-beaver-builder-debug-mode",
          ]
        },
        {
          type: 'category',
          label: 'Common Issues',
          items: [
            "beaver-builder/troubleshooting/common-issues/403-forbidden-or-blocked-error",
            "beaver-builder/troubleshooting/common-issues/404-error-when-trying-to-open-editor",
            "beaver-builder/troubleshooting/common-issues/internal-server-500-error",
            "beaver-builder/troubleshooting/common-issues/dreamhost",
            "beaver-builder/troubleshooting/common-issues/title-bar-incorrect",
            "beaver-builder/troubleshooting/common-issues/destination-folder-already-exists",
            "beaver-builder/troubleshooting/common-issues/require-once",
            "beaver-builder/troubleshooting/common-issues/zlib-output-compression",
            "beaver-builder/troubleshooting/common-issues/cloudflare-and-403-errors-when-loading-background-images",
            "beaver-builder/troubleshooting/common-issues/exceeds-php-max-input-vars",
            "beaver-builder/troubleshooting/common-issues/http-error-when-uploading-images",
            "beaver-builder/troubleshooting/common-issues/increase-the-wordpress-allowed-memory-size",
            "beaver-builder/troubleshooting/common-issues/use-smtp-to-send-form-notifications",
            "beaver-builder/troubleshooting/common-issues/i-cant-upload-the-installer-zip-file-because-it-is-unzipped-when-i-download",
            "beaver-builder/troubleshooting/common-issues/the-uploaded-file-exceeds-the-uploadmaxfilesize-directive-in-php-ini",
            "beaver-builder/troubleshooting/common-issues/error-when-trying-to-install-update",
            "beaver-builder/troubleshooting/common-issues/i-migrated-a-site-but-my-image-urls-didnt-change",
            "beaver-builder/troubleshooting/common-issues/im-getting-a-permission-denied-error",
            "beaver-builder/troubleshooting/common-issues/i-am-getting-a-blank-screen",
            "beaver-builder/troubleshooting/common-issues/error-settings-not-saved",
          ]
        },
        {
          type: 'category',
          label: 'Updates & License Issues',
          items: [
            "beaver-builder/troubleshooting/updates-license/not-getting-beaver-builder-updates",
            "beaver-builder/troubleshooting/updates-license/uninstall-or-deactivate-the-beaver-builder-plugin",
            "beaver-builder/troubleshooting/updates-license/beaver-builder-not-working-after-upgrading",
            "beaver-builder/troubleshooting/updates-license/manually-reinstall-beaver-builder",
          ]
        },
        {
          type: 'category',
          label: 'Miscellaneous',
          items: [
            "beaver-builder/troubleshooting/miscellaneous/cant-find-the-beaver-builder-menu-in-the-admin-panel",
            "beaver-builder/troubleshooting/miscellaneous/cant-open-page-in-beaver-builder",
            "beaver-builder/troubleshooting/miscellaneous/font-awesome-icons",
            "beaver-builder/troubleshooting/miscellaneous/reduce-disable-undo-redo-manager",
            "beaver-builder/troubleshooting/miscellaneous/wordpress-admin-bar-is-hidden",
            "beaver-builder/troubleshooting/miscellaneous/classic-wordpress-and-beaver-builder-text-editor-toolbars-dont-match",
            "beaver-builder/troubleshooting/miscellaneous/background-color-or-image-doesnt-appear",
            "beaver-builder/troubleshooting/miscellaneous/i-cant-drag-and-drop-modules",
            "beaver-builder/troubleshooting/miscellaneous/subscribe-form-mailchimp-merge-fields-invalid",
            "beaver-builder/troubleshooting/miscellaneous/mailchimp-subscriber-popup-form-breaks-beaver-builder",
            "beaver-builder/troubleshooting/miscellaneous/beaver-builder-does-not-open-for-editing-on-nginx-servers",
            "beaver-builder/troubleshooting/miscellaneous/device-previews-beaver-builder-customizer-and-beyond",
            "beaver-builder/troubleshooting/miscellaneous/how-beaver-builder-renders-the-title-of-an-image",
            "beaver-builder/troubleshooting/miscellaneous/my-custom-column-width-keeps-changing",
            "beaver-builder/troubleshooting/miscellaneous/new-slideshow-images-dont-appear-on-siteground-staging-sites",
            "beaver-builder/troubleshooting/miscellaneous/uploaded-icon-set-is-blank",
            "beaver-builder/troubleshooting/miscellaneous/why-am-i-seeing-an-eye-icon-in-my-module-toolbar",
            "beaver-builder/troubleshooting/miscellaneous/limit-on-adding-rows",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'White Label (Agency)',
      link: {
        type: 'generated-index',
        title: 'White Label (Agency)',
        slug: '/beaver-builder/white-labeling/',
      },
      items: [
        "beaver-builder/white-labeling/white-labeling-beaver-builder",
        "beaver-builder/white-labeling/replace-built-in-layout-templates-with-your-own",
        "beaver-builder/white-labeling/customize-the-help-button",
        "beaver-builder/white-labeling/white-label-the-ajax-crash-message",
      ]
    },
    {
      type: 'category',
      label: 'Developer',
      link: {
        type: 'generated-index',
        title: 'Developer',
        slug: '/beaver-builder/developer/',
      },
      items: [
        {
          type: 'category',
          label: 'Custom Modules',
          link: {
            type: 'doc',
            id: 'beaver-builder/developer/custom-modules/index',
          },
          items: [
            "beaver-builder/developer/custom-modules/01-create-a-plugin",
            "beaver-builder/developer/custom-modules/02-add-a-module-to-your-plugin",
            "beaver-builder/developer/custom-modules/03-define-module-settings",
            "beaver-builder/developer/custom-modules/04-module-settings-css-javascript",
            "beaver-builder/developer/custom-modules/05-module-html",
            "beaver-builder/developer/custom-modules/06-module-css",
            "beaver-builder/developer/custom-modules/07-module-javascript",
            "beaver-builder/developer/custom-modules/08-module-property-reference",
            "beaver-builder/developer/custom-modules/09-module-method-reference",
            "beaver-builder/developer/custom-modules/10-setting-fields-reference",
            "beaver-builder/developer/custom-modules/11-responsive-fields-reference",
            "beaver-builder/developer/custom-modules/12-repeater-fields-reference",
            "beaver-builder/developer/custom-modules/13-sanitize-field-values",
            "beaver-builder/developer/custom-modules/14-create-custom-fields",
            "beaver-builder/developer/custom-modules/15-helpers",
            "beaver-builder/developer/custom-modules/16-live-preview-reference",
            "beaver-builder/developer/custom-modules/17-partial-refresh-reference",
            "beaver-builder/developer/custom-modules/18-override-modules",
            "beaver-builder/developer/custom-modules/19-localization",
          ],
        },
        "beaver-builder/developer/iframe-ui",
        "beaver-builder/developer/acf-blocks",
        {
          type: 'category',
          label: "How to's & Tips",
          link: {
            type: 'generated-index',
            title: "How to's & Tips",
            slug: '/beaver-builder/developer/how-to-tips/',
          },
          items: [
            "beaver-builder/developer/how-to-tips/map-module-filter-google",
            "beaver-builder/developer/how-to-tips/display-subset-typography-controls",
            "beaver-builder/developer/how-to-tips/data-storage",
            "beaver-builder/developer/how-to-tips/html-css-and-javascript-reference",
            "beaver-builder/developer/how-to-tips/theme-author-templates",
            "beaver-builder/developer/how-to-tips/load-css-and-javascript-inline",
            "beaver-builder/developer/how-to-tips/disable-schema-markup-beaver-builder",
            "beaver-builder/developer/how-to-tips/disable-minification-and-caching-with-wpdebug",
            "beaver-builder/developer/how-to-tips/add-custom-attributes-to-rows-columns-or-modules",
            "beaver-builder/developer/how-to-tips/render-layouts-with-php",
            "beaver-builder/developer/how-to-tips/load-google-fonts-locally-gdpr",
            "beaver-builder/developer/how-to-tips/prevent-css-and-javascript-from-loading-on-archive-pages",
            "beaver-builder/developer/how-to-tips/create-a-video-lightbox-for-an-amazon-s3-video",
          ]
        },
        {
          type: 'category',
          label: 'Tutorials & Guides',
          link: {
            type: 'generated-index',
            title: 'Tutorials & Guides',
            slug: '/beaver-builder/developer/tutorials-guides/',
          },
          items: [
            "beaver-builder/developer/tutorials-guides/install-beaver-builder-via-composer",
            "beaver-builder/developer/tutorials-guides/wp-cli-plugin-theme",
            "beaver-builder/developer/tutorials-guides/remove-rename-tools-menu-items",
            "beaver-builder/developer/tutorials-guides/customize-settings-forms",
            "beaver-builder/developer/tutorials-guides/common-beaver-builder-plugin-filter-examples",
            "beaver-builder/developer/tutorials-guides/add-icons-to-your-custom-modules",
            "beaver-builder/developer/tutorials-guides/customize-row-resizing-behavior",
            "beaver-builder/developer/tutorials-guides/customize-keyboard-shortcuts",
            "beaver-builder/developer/tutorials-guides/change-how-css-and-javascript-are-loaded",
            "beaver-builder/developer/tutorials-guides/create-a-custom-module-to-compare-images-with-a-slider",
            "beaver-builder/developer/tutorials-guides/create-a-filter-to-customize-the-display-of-post-data",
            "beaver-builder/developer/tutorials-guides/add-a-custom-shape-layer",
          ]
        },
        "beaver-builder/developer/conditionally-hidden-content",
        {
          type: 'link',
          label: 'Hooks',
          href: 'https://hooks.wpbeaverbuilder.com/bb-plugin/'
        }
      ]
    },
  ],
  beaverthemer: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'beaver-themer/introduction/index',
      },
      items: [
        "beaver-themer/introduction/faq",
        "beaver-themer/introduction/dev-preview",
        "beaver-themer/introduction/about-release",
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/beaver-themer/getting-started/',
      },
      items: [
        "beaver-themer/getting-started/what-can-i-do-with-beaver-themer",
        "beaver-themer/getting-started/beaver-themer-requirements-for-installation",
        "beaver-themer/getting-started/install-beaver-themer",
        "beaver-themer/getting-started/i-installed-beaver-themer-now-what",
        "beaver-themer/getting-started/primer-on-wordpress-content-and-theme-areas-themer",
      ]
    },
    {
      type: 'category',
      label: 'Layout Types & Modules',
      link: {
        type: 'generated-index',
        title: 'Layout Types & Modules',
        slug: '/beaver-themer/layout-types-modules/',
      },
      items: [
        {
          type: 'category',
          label: 'Header layout type',
          items: [
            "beaver-themer/layout-types-modules/header-layout-type/themer-header-layout-type",
            "beaver-themer/layout-types-modules/header-layout-type/tutorial-create-a-header-layout-themer",
          ]
        },
        {
          type: 'category',
          label: 'Footer layout type',
          items: [
            "beaver-themer/layout-types-modules/footer-layout-type/themer-footer-layout-type",
          ]
        },
        {
          type: 'category',
          label: 'Archive layout type',
          items: [
            "beaver-themer/layout-types-modules/archive-layout-type/themer-archive-layout-type",
            "beaver-themer/layout-types-modules/archive-layout-type/themer-archive-layout-archive-title-module",
            "beaver-themer/layout-types-modules/archive-layout-type/themer-archive-layout-archive-description-module",
            "beaver-themer/layout-types-modules/archive-layout-type/themer-archive-layout-post-columns-gallery-list-masonry-modules",
            "beaver-themer/layout-types-modules/archive-layout-type/example-themer-archive-layout-for-custom-post-type-categories",
            "beaver-themer/layout-types-modules/archive-layout-type/tutorial-create-an-author-archive-themer-layout",
            "beaver-themer/layout-types-modules/archive-layout-type/create-a-card-layout-for-posts-themer",
          ]
        },
        {
          type: 'category',
          label: 'Singular layout type',
          items: [
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-type",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-attached-images-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-author-bio-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-comments-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-featured-image-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-content-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-info-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-navigation-module",
            "beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-title-module",
            "beaver-themer/layout-types-modules/singular-layout-type/use-the-posts-module-to-create-related-posts",
            "beaver-themer/layout-types-modules/singular-layout-type/add-a-singular-themer-layout-to-the-wordpress-page-template-field",
          ]
        },
        {
          type: 'category',
          label: '404 layout type',
          items: [
            "beaver-themer/layout-types-modules/404-layout-type/themer-404-layout-type",
          ]
        },
        {
          type: 'category',
          label: 'Part layout type',
          items: [
            "beaver-themer/layout-types-modules/part-layout-type/themer-part-layout-type",
            "beaver-themer/layout-types-modules/part-layout-type/add-yoast-breadcrumbs-with-beaver-themer",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'generated-index',
        title: 'Integrations',
        slug: '/beaver-themer/integration/',
      },
      items: [
        {
          type: 'category',
          label: 'Advanced Custom Fields',
          link: {
            type: 'doc',
            id: 'beaver-themer/integrations/acf/index',
          },
          items: [
            "beaver-themer/integrations/acf/getting-started",
            "beaver-themer/integrations/acf/options-page",
            {
              type: 'category',
              label: 'Field Types',
              link: {
                type: 'doc',
                id: 'beaver-themer/integrations/acf/field-types/index',
              },
              items: [
                "beaver-themer/integrations/acf/field-types/button-group",
                "beaver-themer/integrations/acf/field-types/checkbox",
                "beaver-themer/integrations/acf/field-types/date-picker",
                "beaver-themer/integrations/acf/field-types/date-time-picker",
                "beaver-themer/integrations/acf/field-types/email",
                "beaver-themer/integrations/acf/field-types/file",
                "beaver-themer/integrations/acf/field-types/flexible-content",
                "beaver-themer/integrations/acf/field-types/gallery",
                "beaver-themer/integrations/acf/field-types/google-map",
                "beaver-themer/integrations/acf/field-types/group",
                "beaver-themer/integrations/acf/field-types/image",
                "beaver-themer/integrations/acf/field-types/number",
                "beaver-themer/integrations/acf/field-types/oembed",
                "beaver-themer/integrations/acf/field-types/page-link",
                "beaver-themer/integrations/acf/field-types/password",
                "beaver-themer/integrations/acf/field-types/post-object",
                "beaver-themer/integrations/acf/field-types/radio-button",
                "beaver-themer/integrations/acf/field-types/relationship",
                "beaver-themer/integrations/acf/field-types/repeater",
                "beaver-themer/integrations/acf/field-types/select",
                "beaver-themer/integrations/acf/field-types/smart-slider",
                "beaver-themer/integrations/acf/field-types/taxonomy",
                "beaver-themer/integrations/acf/field-types/text-area",
                "beaver-themer/integrations/acf/field-types/text",
                "beaver-themer/integrations/acf/field-types/time-picker",
                "beaver-themer/integrations/acf/field-types/true-false",
                "beaver-themer/integrations/acf/field-types/url",
                "beaver-themer/integrations/acf/field-types/user",
                "beaver-themer/integrations/acf/field-types/wysiwyg",
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'WooCommerce',
          link: {
            type: 'generated-index',
            title: 'WooCommerce',
            slug: '/beaver-themer/integrations/woocommerce/',
          },
          items: [
            "beaver-themer/integrations/woocommerce/create-an-archive-themer-layout-for-woocommerce",
            "beaver-themer/integrations/woocommerce/create-a-singular-themer-layout-for-woocommerce",
            "beaver-themer/integrations/woocommerce/breadcrumb-module-for-woocommerce-singular-and-archive-themer-layouts",
            "beaver-themer/integrations/woocommerce/products-module-for-woocommerce-archive-themer-layouts",
            "beaver-themer/integrations/woocommerce/add-to-cart-button-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-description-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-images-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-meta-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-price-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-rating-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-tabs-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-title-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/product-upsells-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/related-products-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/woo-notices-module-for-woocommerce-singular-themer-layouts",
            "beaver-themer/integrations/woocommerce/woocommerce-field-connection-shortcode-index",
          ]
        },
        {
          type: 'category',
          label: 'BigCommerce',
          link: {
            type: 'generated-index',
            title: 'BigCommerce',
            slug: '/beaver-themer/integrations/bigcommerce/',
          },
          items: [
            "beaver-themer/integrations/bigcommerce/beaver-themer-layouts-for-bigcommerce",
            "beaver-themer/integrations/bigcommerce/create-an-archive-themer-layout-for-bigcommerce",
            "beaver-themer/integrations/bigcommerce/create-a-themer-layout-to-display-a-single-bigcommerce-product",
            "beaver-themer/integrations/bigcommerce/products-posts-module-for-bigcommerce",
          ]
        },
        {
          type: 'category',
          label: 'Easy Digital Downloads',
          link: {
            type: 'generated-index',
            title: 'Easy Digital Downloads',
            slug: '/beaver-themer/integrations/easy-digital-downloads/',
          },
          items: [
            "beaver-themer/integrations/easy-digital-downloads/beaver-themer-and-the-edd-plugin",
            "beaver-themer/integrations/easy-digital-downloads/create-an-archive-themer-layout-for-edd-download-sets",
            "beaver-themer/integrations/easy-digital-downloads/create-a-singular-themer-layout-for-edd-download-items-themer",
          ]
        },
        {
          type: 'category',
          label: 'The Events Calendar',
          link: {
            type: 'doc',
            id: 'beaver-themer/integrations/tec/index',
          },
          items: [
            "beaver-themer/integrations/tec/getting-started",
            "beaver-themer/integrations/tec/field-connections",
            "beaver-themer/integrations/tec/archive-layout",
            "beaver-themer/integrations/tec/singular-layout",
            {
              type: 'category',
              label: 'Modules',
              link: {
                 type: 'doc',
                 id: "beaver-themer/integrations/tec/modules/index",
              },
              items: [
                 "beaver-themer/integrations/tec/modules/event-calendar",
                 "beaver-themer/integrations/tec/modules/event-posts",
                 "beaver-themer/integrations/tec/modules/event-cost",
                 "beaver-themer/integrations/tec/modules/event-countdown",
                 "beaver-themer/integrations/tec/modules/event-date-time",
                 "beaver-themer/integrations/tec/modules/event-description",
                 "beaver-themer/integrations/tec/modules/event-details",
                 "beaver-themer/integrations/tec/modules/event-export-links",
                 "beaver-themer/integrations/tec/modules/event-map",
                 "beaver-themer/integrations/tec/modules/event-navigation",
                 "beaver-themer/integrations/tec/modules/event-notices",
                 "beaver-themer/integrations/tec/modules/event-organizer",
                 "beaver-themer/integrations/tec/modules/event-related-events",
                 "beaver-themer/integrations/tec/modules/event-tickets",
                 "beaver-themer/integrations/tec/modules/event-title",
                 "beaver-themer/integrations/tec/modules/event-venue",
                 "beaver-themer/integrations/tec/modules/event-website",
              ],
           },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Field Connections',
      link: {
        type: 'generated-index',
        title: 'Field Connections',
        slug: '/beaver-themer/field-connections/',
      },
      items: [
        "beaver-themer/field-connections/field-connection-basics-themer",
        "beaver-themer/field-connections/field-connection-shortcodes-overview-themer",
        "beaver-themer/field-connections/add-edit-or-delete-a-field-connection-or-shortcode-themer",
        "beaver-themer/field-connections/connect-custom-fields-wordpress-toolset-pods-acf-themer",
        "beaver-themer/field-connections/conditional-shortcodes-for-field-connections-overview-themer",
        "beaver-themer/field-connections/use-conditional-shortcode-to-test-for-presence-of-content-themer",
        "beaver-themer/field-connections/find-the-full-list-of-field-connection-and-parameters-themer",
        "beaver-themer/field-connections/field-connection-shortcode-index-themer",
        "beaver-themer/field-connections/troubleshoot-field-connection-shortcodes-themer",
        {
          type: 'category',
          label: 'Field Connections to WP custom fields',
          items: [
            "beaver-themer/field-connections/connections-to-wp-custom-fields/display-a-wordpress-custom-field-in-a-singular-themer-layout",
            "beaver-themer/field-connections/connections-to-wp-custom-fields/test-for-values-in-wordpress-custom-field-shortcode",
          ]
        },
        {
          type: 'category',
          label: 'Field Connections to Pods custom fields',
          items: [
            "beaver-themer/field-connections/connections-to-pods-custom-fields/build-this-display-a-pods-custom-field-and-separator-only-when-theres-content",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Locations',
      items: [
        "beaver-themer/locations/themer-locations-reference",
      ]
    },
    {
      type: 'category',
      label: 'Conditional Logic',
      items: [
        "beaver-themer/conditional-logic/beaver-themer-conditional-logic",
      ]
    },
    {
      type: 'category',
      label: 'Management/Compatibility',
      link: {
        type: 'generated-index',
        title: 'Management & Compatibility',
        slug: '/beaver-themer/management-compatibility/',
      },
      items: [
        "beaver-themer/management-compatibility/beaver-themer-supported-themes",
        "beaver-themer/management-compatibility/full-width-layouts-on-third-party-themes-themer",
        "beaver-themer/management-compatibility/export-beaver-themer-layouts",
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        slug: '/beaver-themer/troubleshooting/',
      },
      items: [
        "beaver-themer/troubleshooting/themer-layouts-option-doesnt-appear-in-builder-menu",
        "beaver-themer/troubleshooting/why-does-my-themer-layout-say-unsupported",
        "beaver-themer/troubleshooting/message-this-post-has-a-themer-layout-assigned",
        "beaver-themer/troubleshooting/troubleshooting-singular-layout-appears-in-post-preview-but-not-actual-post-themer",
      ]
    },
    {
      type: 'category',
      label: 'Developer',
      link: {
        type: 'generated-index',
        title: 'Developer',
        slug: '/beaver-themer/developer/',
      },
      items: [
        "beaver-themer/developer/add-header-footer-and-parts-support-to-your-theme-themer",
        "beaver-themer/developer/conditional-logic-apis",
        "beaver-themer/developer/customize-field-connections-themer",
        "beaver-themer/developer/add-custom-attributes-to-themer-layouts",
        "beaver-themer/developer/customize-themer-modules",
        "beaver-themer/developer/hide-row-or-module-when-field-connection-is-empty-themer",
        "beaver-themer/developer/hooks-reference-themer",
        "beaver-themer/developer/wp-cli-for-beaver-themer",
      ]
    },
  ],
  bbtheme: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'bb-theme/introduction/index',
      },
      items: [
        "bb-theme/introduction/faq",
        "bb-theme/introduction/dev-preview",
        // "bb-theme/introduction/about-release",
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/bb-theme/getting-started/',
      },
      items: [
        "bb-theme/getting-started/install-the-bb-theme-and-child-theme",
        "bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme",
        "bb-theme/getting-started/manually-reinstall-bb-theme-child-theme",
        "bb-theme/getting-started/built-in-theme-templates-for-single-pages-and-posts",
        "bb-theme/getting-started/open-the-wordpress-customizer",
        "bb-theme/getting-started/responsive-previews",
      ]
    },
    {
      type: 'category',
      label: 'Site Settings',
      link: {
        type: 'generated-index',
        title: 'Site Settings',
        slug: '/bb-theme/site-settings/',
      },
      items: [
        "bb-theme/site-settings/create-a-site-title-and-tagline",
        "bb-theme/site-settings/header-logo",
        "bb-theme/site-settings/add-a-site-icon-favicon",
        "bb-theme/site-settings/set-whether-the-home-page-is-a-page-or-post",
      ]
    },
    {
      type: 'category',
      label: 'Defaults for Layouts & Content',
      link: {
        type: 'generated-index',
        title: 'Defaults for Layouts & Content',
        slug: '/bb-theme/defaults-for-layouts-content/',
      },
      items: [
        {
          type: 'category',
          label: 'One-click Presets',
          items: [
            "bb-theme/defaults-for-layouts-content/presets/preset-tips",
            "bb-theme/defaults-for-layouts-content/presets/convert-the-premier-or-deluxe-preset-to-entirely-full-width",
          ]
        },
        {
          type: 'category',
          label: 'Full-Width & Boxed Layouts',
          items: [
            "bb-theme/defaults-for-layouts-content/full-width-boxed/overview-of-full-width-and-boxed-pages-and-rows",
            "bb-theme/defaults-for-layouts-content/full-width-boxed/set-a-full-width-or-boxed-layout",
            "bb-theme/defaults-for-layouts-content/full-width-boxed/set-a-full-width-header-with-boxed-content",
          ]
        },
        {
          type: 'category',
          label: 'Headers/Navigation/Menus',
          items: [
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/set-header-layout-and-style",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/fixed-header-types",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/align-the-top-bar-columns-with-content-margins",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/change-size-of-fade-in-fixed-header-logo-text",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/merge-page-content-into-the-header",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/add-the-site-tagline-to-the-header",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/change-header-logo-size-in-nav-bottom-layout",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/remove-the-header-and-footer",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/hide-the-header-nav-menu",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/create-menus-and-set-menu-locations",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/choose-how-menus-open-responsively",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/set-up-a-mega-menu",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/add-buttons-to-your-navigation-menu",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/add-css-classes-to-individual-menu-items",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/add-shortcodes-or-html-to-your-nav-menu",
            "bb-theme/defaults-for-layouts-content/headers-nav-menus/center-the-nav-menu-with-nav-bottom-layout",
          ]
        },
        {
          type: 'category',
          label: 'Footers',
          items: [
            "bb-theme/defaults-for-layouts-content/footers/set-footer-layout-and-style-options",
            "bb-theme/defaults-for-layouts-content/footers/customize-the-default-theme-footer",
            "bb-theme/defaults-for-layouts-content/footers/force-footer-to-bottom-on-short-pages",
          ]
        },
        {
          type: 'category',
          label: 'Blog Layouts',
          items: [
            "bb-theme/defaults-for-layouts-content/blog-settings/configure-how-wordpress-handles-your-blog",
            "bb-theme/defaults-for-layouts-content/blog-settings/remove-website-field-url-from-post-comments",
          ]
        },
        {
          type: 'category',
          label: 'Sidebars',
          items: [
            "bb-theme/defaults-for-layouts-content/sidebars/use-the-beaver-builder-themes-sidebar-in-posts-and-pages",
            "bb-theme/defaults-for-layouts-content/sidebars/position-left-sidebar-below-content-in-mobile",
          ]
        },
        {
          type: 'category',
          label: 'Widgets',
          items: [
            "bb-theme/defaults-for-layouts-content/widgets/configure-the-widgets-in-the-primary-sidebar",
            "bb-theme/defaults-for-layouts-content/widgets/set-options-for-footer-widgets",
            "bb-theme/defaults-for-layouts-content/widgets/change-the-width-of-footer-widgets",
            "bb-theme/defaults-for-layouts-content/widgets/add-a-widget-area-after-the-beaver-builder-theme-top-bar",
          ]
        },
        {
          type: 'category',
          label: 'Icons',
          items: [
            "bb-theme/defaults-for-layouts-content/icons/where-can-i-add-social-icons",
            "bb-theme/defaults-for-layouts-content/icons/choose-how-font-awesome-icons-load-in-beaver-builder-theme",
            "bb-theme/defaults-for-layouts-content/icons/adjust-the-size-of-the-social-icons",
          ]
        },
        "bb-theme/defaults-for-layouts-content/shortcode-for-current-date",
        "bb-theme/defaults-for-layouts-content/set-woocommerce-layout",
        "bb-theme/defaults-for-layouts-content/add-yoast-breadcrumbs-to-the-beaver-builder-theme",
        "bb-theme/defaults-for-layouts-content/integrate-sensei-with-the-beaver-builder-theme",
      ]
    },
    {
      type: 'category',
      label: 'Defaults for Styles',
      link: {
        type: 'generated-index',
        title: 'Defaults for Styles',
        slug: '/bb-theme/defaults-for-styles/',
      },
      items: [
        {
          type: 'category',
          label: 'Colors',
          items: [
            "bb-theme/defaults-for-styles/colors/set-a-background-color-or-image-for-the-browser-window",
            "bb-theme/defaults-for-styles/colors/set-a-background-color-or-image-for-content-area",
            "bb-theme/defaults-for-styles/colors/where-do-menu-colors-come-from",
            "bb-theme/defaults-for-styles/colors/change-menu-link-and-icon-colors-on-small-devices",
            "bb-theme/defaults-for-styles/colors/change-menu-background-color-on-small-devices",
            "bb-theme/defaults-for-styles/colors/add-color-presets-to-customizer",
          ]
        },
        {
          type: 'category',
          label: 'Links & Buttons',
          items: [
            "bb-theme/defaults-for-styles/links/change-the-default-color-for-buttons-and-links",
            "bb-theme/defaults-for-styles/links/set-global-default-button-styles",
            "bb-theme/defaults-for-styles/links/add-underlines-to-link-text-beaver-builder-theme",
          ]
        },
        {
          type: 'category',
          label: 'Typography',
          items: [
            "bb-theme/defaults-for-styles/typography/set-sitewide-style-options-for-headings-and-text",
            "bb-theme/defaults-for-styles/typography/set-responsive-default-text-styles-for-beaver-builder-layouts",
            "bb-theme/defaults-for-styles/typography/customizer-font-family-setting-system-ui",
            "bb-theme/defaults-for-styles/typography/use-a-google-font-in-headings-and-text",
            "bb-theme/defaults-for-styles/typography/add-web-fonts-to-your-theme-and-the-beaver-builder-plugin",
            "bb-theme/defaults-for-styles/typography/add-web-fonts-complex-example",
            "bb-theme/defaults-for-styles/typography/load-and-use-adobe-fonts",
            "bb-theme/defaults-for-styles/typography/load-and-use-google-fonts-not-available-in-beaver-builder",
          ]
        },
        {
          type: 'category',
          label: 'Images',
          items: [
            "bb-theme/defaults-for-styles/images/enable-or-disable-whether-images-appear-in-a-lightbox",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Customizer Settings',
      link: {
        type: 'generated-index',
        title: 'Customizer Settings',
        slug: '/bb-theme/customizer-settings/',
      },
      items: [
        "bb-theme/customizer-settings/presets",
        "bb-theme/customizer-settings/general",
        "bb-theme/customizer-settings/header",
        "bb-theme/customizer-settings/content",
        "bb-theme/customizer-settings/footer",
        "bb-theme/customizer-settings/widgets",
        "bb-theme/customizer-settings/code",
        "bb-theme/customizer-settings/settings",
        "bb-theme/customizer-settings/menus",
        "bb-theme/customizer-settings/the-events-calendar",
        "bb-theme/customizer-settings/bigcommerce",
        "bb-theme/customizer-settings/woocommerce",
        "bb-theme/customizer-settings/additional-css",
        "bb-theme/customizer-settings/export-import",
      ],
    },
    {
      type: 'category',
      label: 'Code',
      link: {
        type: 'generated-index',
        title: 'Code',
        slug: '/bb-theme/code/',
      },
      items: [
        "bb-theme/code/insert-site-wide-css-or-javascript-code",
        "bb-theme/code/insert-google-analytics-code",
        "bb-theme/code/beaver-builder-theme-customizer-settings-mapped-to-css",
      ]
    },
    {
      type: 'category',
      label: 'Management/Migration',
      link: {
        type: 'generated-index',
        title: 'Management & Migration',
        slug: '/bb-theme/management-migration/',
      },
      items: [
        "bb-theme/management-migration/choose-bootstrap-3-or-4",
        "bb-theme/management-migration/export-or-import-customizer-settings",
        "bb-theme/management-migration/move-parent-theme-customizer-settings-to-a-child-theme",
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        slug: '/bb-theme/troubleshooting/',
      },
      items: [
        "bb-theme/troubleshooting/fix-ubermenu-mobile-navigation-duplication",
        "bb-theme/troubleshooting/cannot-reset-color-to-default",
        "bb-theme/troubleshooting/background-color-in-customizer-doesnt-match-the-preview",
        "bb-theme/troubleshooting/jquery-modal-incompatibility",
      ]
    },
    {
      type: 'category',
      label: 'White Labeling',
      items: [
        "bb-theme/white-labeling/white-label-your-child-theme",
      ]
    },
    {
      type: 'category',
      label: 'Developer',
      link: {
        type: 'generated-index',
        title: 'Developer',
        slug: '/bb-theme/developer/',
      },
      items: [
        "bb-theme/developer/add-a-page-post-or-custom-post-type-template",
        "bb-theme/developer/insert-beaver-builder-shortcode-into-a-theme-template-file",
        "bb-theme/developer/theme-action-reference",
        "bb-theme/developer/theme-filter-reference",
        "bb-theme/developer/theme-css-reference",
        "bb-theme/developer/remove-a-customizer-tab",
        "bb-theme/developer/disable-schema-markup-bb-theme",
        {
          type: 'category',
          label: 'Custom Theme Presets',
          items: [
            "bb-theme/developer/custom-theme-preset/add-a-custom-theme-preset",
            "bb-theme/developer/custom-theme-preset/add-theme-preset-general-tab-options",
            "bb-theme/developer/custom-theme-preset/add-theme-preset-header-tab-options",
            "bb-theme/developer/custom-theme-preset/add-theme-preset-content-tab-options",
            "bb-theme/developer/custom-theme-preset/add-theme-preset-footer-tab-options",
            "bb-theme/developer/custom-theme-preset/remove-an-existing-or-custom-preset",
          ]
        },
      ]
    },
  ],
  assistant: [
    "assistant/overview",
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/assistant/getting-started/',
      },
      items: [
        "assistant/getting-started/what-can-i-do",
        "assistant/getting-started/create-account",
        "assistant/getting-started/install",
        "assistant/getting-started/connect",
      ],
    },
    {
      type: 'category',
      label: 'Assistant Plugin',
      link: {
        type: 'generated-index',
        title: 'Assistant Plugin',
        slug: '/assistant/plugin/',
      },
      items: [
        "assistant/plugin/launch-assistant",
        {
          type: 'category',
          label: 'Apps',
          link: {
            type: 'generated-index',
            title: 'Apps',
            slug: '/assistant/plugin/apps/',
          },
          items: [
            "assistant/plugin/apps/home",
            "assistant/plugin/apps/community",
            "assistant/plugin/apps/content",
            "assistant/plugin/apps/media",
            "assistant/plugin/apps/comments",
            "assistant/plugin/apps/updates",
            "assistant/plugin/apps/libraries",
          ],
        },
        "assistant/plugin/user-profile",
        "assistant/plugin/app-settings",
        "assistant/plugin/limit-access",
      ],
    },
    {
      type: 'category',
      label: 'Assistant Pro Cloud',
      link: {
        type: 'generated-index',
        title: 'Assistant Pro Cloud',
        slug: '/assistant/cloud/',
      },
      items: [
        {
          type: 'category',
          label: 'Account & Settings',
          link: {
            type: 'doc',
            id: 'assistant/cloud/account-settings/index',
          },
          items: [
            "assistant/cloud/account-settings/profile-settings",
            "assistant/cloud/account-settings/change-password",
            "assistant/cloud/account-settings/seller",
            "assistant/cloud/account-settings/transfer-ownership",
            "assistant/cloud/account-settings/delete-account",
          ],
        },
        {
          type: 'category',
          label: 'Libraries',
          link: {
            type: 'doc',
            id: 'assistant/cloud/libraries/index',
          },
          items: [
            "assistant/cloud/libraries/create-library",
            "assistant/cloud/libraries/add-creative-assets",
            "assistant/cloud/libraries/view-edit-assets",
            "assistant/cloud/libraries/share-library",
            "assistant/cloud/libraries/delete-library",
          ],
        },
        {
          type: 'category',
          label: 'Collections',
          link: {
            type: 'generated-index',
            title: 'Collections',
            slug: '/assistant/cloud/collections/',
            description: 'Overview of Library Collections and how to create collections, assign assets and sort by collection.'
          },
          items: [
            "assistant/cloud/collections/create-collection",
            "assistant/cloud/collections/assign-collections",
            "assistant/cloud/collections/sort-collections",
          ],
        },
        "assistant/cloud/teams",
        "assistant/cloud/community",
        {
          type: 'category',
          label: 'Integrations',
          link: {
            type: 'generated-index',
            title: 'Integrations',
            slug: '/assistant/cloud/integrations/',
          },
          items: [
            "assistant/cloud/integrations/beaver-builder",
            "assistant/cloud/integrations/gutenberg",
            "assistant/cloud/integrations/third-party-builders",
            "assistant/cloud/integrations/woocommerce",
          ],
        },
      ],
    },
    "assistant/known-incompatibilities",
  ],
};
