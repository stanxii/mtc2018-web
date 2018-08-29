//go:generate gqlgen

package gqlapi

import (
	"context"
)

// NewResolver returns GraphQL root resolver.
func NewResolver() ResolverRoot {
	return &rootResolver{}
}

type rootResolver struct{}

func (r *rootResolver) Mutation() MutationResolver {
	return &mutationResolver{r}
}

func (r *rootResolver) Query() QueryResolver {
	return &queryResolver{r}
}

func (r *rootResolver) Subscription() SubscriptionResolver {
	return &subscriptionResolver{r}
}

type mutationResolver struct{ *rootResolver }

func (r *mutationResolver) CreateLike(ctx context.Context, input CreateLikeInput) (*CreateLikePayload, error) {
	panic("not implemented")
}

type queryResolver struct{ *rootResolver }

func (r *queryResolver) Node(ctx context.Context, id string) (Node, error) {
	panic("not implemented")
}

func (r *queryResolver) Nodes(ctx context.Context, ids []string) ([]*Node, error) {
	panic("not implemented")
}

func (r *queryResolver) Sessions(ctx context.Context, first int, after *string, req *SessionListInput) (SessionConnection, error) {
	panic("not implemented")
}

type subscriptionResolver struct{ *rootResolver }

func (r *subscriptionResolver) LikeAdded(ctx context.Context) (<-chan Like, error) {

	go func() {
		<-ctx.Done()
		// TODO remove subscription
	}()

	panic("not implemented")
}