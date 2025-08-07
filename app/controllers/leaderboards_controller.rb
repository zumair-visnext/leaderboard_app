class LeaderboardsController < ApplicationController
  def index
    @leaderboards = Leaderboard.by_rank

    # Apply search filter
    if params[:search].present?
      @leaderboards = @leaderboards.search_by_name(params[:search])
    end

    # Pagination with per_page parameter
    per_page = params[:per_page]&.to_i || 10
    per_page = [ 10, 25, 50, 100 ].include?(per_page) ? per_page : 10 # Validate per_page
    @leaderboards = @leaderboards.page(params[:page]).per(per_page)
  end

  def export
    @leaderboards = Leaderboard.by_rank

    # Apply search filter if present
    if params[:search].present?
      @leaderboards = @leaderboards.search_by_name(params[:search])
    end

    # Convert to JSON format
    data = @leaderboards.map do |leaderboard|
      {
        rank: leaderboard.rank,
        name: leaderboard.name,
        xps: leaderboard.xps,
        twitter: leaderboard.twitter,
        discord: leaderboard.discord,
        image_url: leaderboard.image_url
      }
    end

    respond_to do |format|
      format.json { render json: data }
    end
  end
end
