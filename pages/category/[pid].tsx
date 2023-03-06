import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import Tags from '../../components/tags'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { CMS_NAME } from '../../lib/constants'
import Container from '../../components/container'
import HeroPost from '../../components/hero-post'
import PostBody from '../../components/post-body'
import PostTitle from '../../components/post-title'
import PostPreview from '../../components/post-preview'
import PostHeader from '../../components/post-header'
import MoreStories from '../../components/more-stories'
import SectionSeparator from '../../components/section-separator'
import { getCategoryBySlug, getAllCategoriesWithSlug } from '../../lib/api'

export default function Category(category) {
  const router = useRouter()
  // const { pid } = router.query;

  // console.log(category);
  if (!router.isFallback && category?.nodes == false) {
    return <ErrorPage statusCode={404} />
  }
  // // const heroPost = category?.nodes[0]
  const morePosts = category?.nodes

  console.log(morePosts)
  // return <p>{pid}</p>

  
  return (
    <Layout preview="">
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            {/* {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )} */}
            
            {morePosts.length>0 && <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              {morePosts.map((node) => (
                <PostPreview
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  categories={node.categories}
                />
              ))}
            </div>}
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const data = await getCategoryBySlug(params.pid)

  return {
    props: data,
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategoriesWithSlug()

  return {
    paths: categories.edges.map(({ node }) => `/category/${node.slug}`) || [],
    fallback: true,
  }
}
