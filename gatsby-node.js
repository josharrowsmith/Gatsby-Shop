const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // ==== Category pages (Shopify collections) ====
    graphql(
      `
      {
        allShopifyCollection {
          edges {
            node {
              handle
            }
          }
        }
      }
    `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve('./src/templates/category.js')

        result.data.allShopifyCollection.edges.forEach(({ node }) => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            // passing handle for fliter
            path: `/category/${node.handle}/`,
            component: slash(pageTemplate),
            context: {
              handle: node.handle,

            },
          })
        })
        resolve()
      })
      // ==== END PAGES ====

      // ==== Products (Shopify Products) ====  
      .then(() => {
        graphql(`
          {
            allShopifyProduct {
              edges {
                node {
                  handle
                }
              }
            }
          }
        `).then(result => {
          result.data.allShopifyProduct.edges.forEach(({ node }) => {
            createPage({
              path: `/product/${node.handle}/`,
              component: path.resolve(`./src/templates/product.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                handle: node.handle,
              },
            })
          })
          resolve()
        })
      }) 
    // ==== END PRODUCTS ====         
    })
  }

